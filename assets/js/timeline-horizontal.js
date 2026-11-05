/*!
 * Timeline Horizontal — JavaScript puro (sem jQuery), pronto para Bootstrap 5.1.3
 *
 * Inicialização automática em todo elemento .htl.
 * Uso manual (opcional):
 *   const tl = new HorizontalTimeline(document.querySelector('#minha-timeline'), { minDistance: 80 });
 *   tl.next(); tl.prev(); tl.goTo(3); tl.refresh(); tl.destroy();
 *   HorizontalTimeline.getInstance(el);
 *
 * Evento disparado no elemento raiz a cada troca:
 *   el.addEventListener('htl:change', e => console.log(e.detail.index, e.detail.date));
 */
(function (window, document) {
    'use strict';

    var CLS = {
        loaded: 'is-loaded',
        selected: 'is-selected',
        older: 'is-older',
        inactive: 'is-inactive',
        enterRight: 'enter-right',
        enterLeft: 'enter-left',
        leaveRight: 'leave-right',
        leaveLeft: 'leave-left'
    };

    var ANIM_CLASSES = [CLS.enterRight, CLS.enterLeft, CLS.leaveRight, CLS.leaveLeft];

    var DEFAULTS = {
        minDistance: 60,     // px mínimos entre as duas datas mais próximas
        swipeThreshold: 50,  // px de deslize para trocar de evento no touch
        keyboard: true       // setas ← → quando a timeline está visível
    };

    var INSTANCE_KEY = '__htlInstance';

    /* ------------------------------------------------------------------ */
    /* Utilitários                                                         */
    /* ------------------------------------------------------------------ */

    // Aceita "DD/MM/AAAA", "DD/MM/AAAATHH:mm" ou "HH:mm"
    function parseDate(value) {
        var parts = String(value || '').trim().split('T');
        var day, time;

        if (parts.length > 1) {
            day = parts[0].split('/');
            time = parts[1].split(':');
        } else if (parts[0].indexOf(':') >= 0) {
            day = ['1', '1', '2000'];
            time = parts[0].split(':');
        } else {
            day = parts[0].split('/');
            time = ['0', '0'];
        }

        return new Date(+day[2], +day[1] - 1, +day[0], +time[0] || 0, +time[1] || 0).getTime();
    }

    function prefersReducedMotion() {
        return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    }

    function isTypingTarget(el) {
        if (!el) return false;
        var tag = (el.tagName || '').toLowerCase();
        return tag === 'input' || tag === 'textarea' || tag === 'select' || el.isContentEditable;
    }

    /* ------------------------------------------------------------------ */
    /* Classe                                                              */
    /* ------------------------------------------------------------------ */

    function HorizontalTimeline(root, options) {
        if (!root) throw new Error('HorizontalTimeline: elemento raiz não encontrado.');
        if (root[INSTANCE_KEY]) return root[INSTANCE_KEY];

        var data = root.dataset;
        var fromData = {};
        if (data.htlMinDistance) fromData.minDistance = Number(data.htlMinDistance);
        if (data.htlKeyboard) fromData.keyboard = data.htlKeyboard !== 'false';

        this.root = root;
        this.options = Object.assign({}, DEFAULTS, fromData, options || {});

        this.wrapper = root.querySelector('.htl__events-wrapper');
        this.track = root.querySelector('.htl__events');
        this.filling = root.querySelector('.htl__filling-line');
        this.dateEls = Array.prototype.slice.call(root.querySelectorAll('.htl__date'));
        this.content = root.querySelector('.htl__content');
        this.items = this.content ? Array.prototype.slice.call(this.content.querySelectorAll('.htl__item')) : [];
        this.prevBtn = root.querySelector('.htl__nav-btn--prev');
        this.nextBtn = root.querySelector('.htl__nav-btn--next');

        this.current = -1;
        this.translate = 0;
        this.totalWidth = 0;
        this._handlers = {};

        if (!this.wrapper || !this.track || !this.dateEls.length) {
            console.warn('HorizontalTimeline: estrutura incompleta.', root);
            return;
        }

        this._layout();
        this._translateTo(0);

        var initial = this.dateEls.findIndex(function (el) {
            return el.classList.contains(CLS.selected);
        });
        this.goTo(initial > -1 ? initial : 0, { animate: false, silent: true });

        this._bind();
        root.classList.add(CLS.loaded);
        root[INSTANCE_KEY] = this;
    }

    /* ---------- API pública ---------- */

    HorizontalTimeline.prototype.next = function () {
        this.goTo(this.current + 1);
    };

    HorizontalTimeline.prototype.prev = function () {
        this.goTo(this.current - 1);
    };

    HorizontalTimeline.prototype.goTo = function (index, opts) {
        opts = opts || {};
        var animate = opts.animate !== false;

        if (index < 0 || index >= this.dateEls.length || index === this.current) return;

        var target = this.dateEls[index];

        this.dateEls.forEach(function (el, i) {
            el.classList.toggle(CLS.selected, i === index);
            el.classList.toggle(CLS.older, i < index);
            if (i === index) el.setAttribute('aria-current', 'true');
            else el.removeAttribute('aria-current');
        });

        this.current = index;
        this._updateFilling();
        this._updateContent(index, animate);
        this._ensureVisible(target);

        if (!opts.silent) {
            this.root.dispatchEvent(new CustomEvent('htl:change', {
                bubbles: true,
                detail: { index: index, date: target.dataset.date, instance: this }
            }));
        }
    };

    // Desliza a barra de datas (setas laterais) sem trocar o evento ativo
    HorizontalTimeline.prototype.slide = function (direction) {
        var step = this.wrapper.clientWidth - this.options.minDistance;
        this._translateTo(this.translate + (direction === 'next' ? -step : step));
    };

    // Recalcula medidas (útil se a timeline estava oculta em tab/collapse/modal)
    HorizontalTimeline.prototype.refresh = function () {
        this._translateTo(this.translate);
        this._updateFilling();
        this._updateHeight();
        if (this.current > -1) this._ensureVisible(this.dateEls[this.current]);
    };

    HorizontalTimeline.prototype.destroy = function () {
        var h = this._handlers;
        if (this.prevBtn) this.prevBtn.removeEventListener('click', h.prevClick);
        if (this.nextBtn) this.nextBtn.removeEventListener('click', h.nextClick);
        this.track.removeEventListener('click', h.dateClick);
        if (this.content) {
            this.content.removeEventListener('touchstart', h.touchStart);
            this.content.removeEventListener('touchend', h.touchEnd);
        }
        document.removeEventListener('keyup', h.keyup);
        window.removeEventListener('resize', h.resize);
        if (this._resizeObserver) this._resizeObserver.disconnect();

        this.root.classList.remove(CLS.loaded);
        delete this.root[INSTANCE_KEY];
    };

    /* ---------- Internos ---------- */

    // Posiciona cada data proporcionalmente à distância temporal
    HorizontalTimeline.prototype._layout = function () {
        var times = this.dateEls.map(function (el) { return parseDate(el.dataset.date); });
        var first = times[0];
        var minLapse = Infinity;

        for (var i = 1; i < times.length; i++) {
            var diff = times[i] - times[i - 1];
            if (diff > 0 && diff < minLapse) minLapse = diff;
        }
        if (!isFinite(minLapse)) minLapse = 1;

        var md = this.options.minDistance;

        this.dateEls.forEach(function (el, idx) {
            var norm = Math.round((times[idx] - first) / minLapse) + 2;
            el.style.left = (norm * md) + 'px';
        });

        var span = times[times.length - 1] - first;
        this.totalWidth = (Math.round(span / minLapse) + 4) * md;
        this.track.style.width = this.totalWidth + 'px';
    };

    HorizontalTimeline.prototype._translateTo = function (value) {
        var min = Math.min(0, this.wrapper.clientWidth - this.totalWidth);
        value = Math.max(min, Math.min(0, value));

        this.translate = value;
        this.track.style.transform = 'translateX(' + value + 'px)';

        this._setNavState(this.prevBtn, value >= 0);
        this._setNavState(this.nextBtn, value <= min);
    };

    HorizontalTimeline.prototype._setNavState = function (btn, inactive) {
        if (!btn) return;
        btn.classList.toggle(CLS.inactive, inactive);
        btn.setAttribute('aria-disabled', inactive ? 'true' : 'false');
    };

    HorizontalTimeline.prototype._ensureVisible = function (el) {
        var width = this.wrapper.clientWidth;
        var left = el.offsetLeft;
        var right = left + el.offsetWidth;

        if (left < -this.translate || right > width - this.translate) {
            this._translateTo(-left + width / 2);
        }
    };

    HorizontalTimeline.prototype._updateFilling = function () {
        if (!this.filling || this.current < 0) return;
        var el = this.dateEls[this.current];
        var center = el.offsetLeft + el.offsetWidth / 2;
        var scale = this.totalWidth ? center / this.totalWidth : 0;
        this.filling.style.transform = 'scaleX(' + scale + ')';
    };

    HorizontalTimeline.prototype._updateContent = function (index, animate) {
        if (!this.items.length) return;

        var date = this.dateEls[index].dataset.date;
        var next = this.items.find(function (it) { return it.dataset.date === date; }) || this.items[index];
        if (!next) return;

        var old = this.items.find(function (it) { return it.classList.contains(CLS.selected); });

        this.items.forEach(function (it) {
            ANIM_CLASSES.forEach(function (c) { it.classList.remove(c); });
        });

        if (!animate || !old || old === next || prefersReducedMotion()) {
            this.items.forEach(function (it) { it.classList.toggle(CLS.selected, it === next); });
        } else {
            var forward = this.items.indexOf(next) > this.items.indexOf(old);

            old.classList.remove(CLS.selected);
            old.classList.add(forward ? CLS.leaveLeft : CLS.leaveRight);
            next.classList.add(CLS.selected, forward ? CLS.enterRight : CLS.enterLeft);

            this._cleanupOnAnimationEnd(old);
            this._cleanupOnAnimationEnd(next);
        }

        this.items.forEach(function (it) {
            it.setAttribute('aria-hidden', it === next ? 'false' : 'true');
        });

        this._updateHeight();
    };

    HorizontalTimeline.prototype._cleanupOnAnimationEnd = function (item) {
        var token = (item.__htlAnimToken || 0) + 1;
        item.__htlAnimToken = token;

        item.addEventListener('animationend', function handler(e) {
            if (e.target !== item) return;
            item.removeEventListener('animationend', handler);
            if (item.__htlAnimToken !== token) return; // houve outra troca no meio
            ANIM_CLASSES.forEach(function (c) { item.classList.remove(c); });
        });
    };

    HorizontalTimeline.prototype._updateHeight = function () {
        if (!this.content) return;
        var selected = this.items.find(function (it) { return it.classList.contains(CLS.selected); });
        if (selected) this.content.style.height = selected.offsetHeight + 'px';
    };

    HorizontalTimeline.prototype._inViewport = function () {
        var r = this.root.getBoundingClientRect();
        return r.bottom > 0 && r.right > 0 &&
            r.top < (window.innerHeight || document.documentElement.clientHeight) &&
            r.left < (window.innerWidth || document.documentElement.clientWidth);
    };

    HorizontalTimeline.prototype._bind = function () {
        var self = this;
        var h = this._handlers;

        // Setas laterais
        h.prevClick = function (e) { e.preventDefault(); self.slide('prev'); };
        h.nextClick = function (e) { e.preventDefault(); self.slide('next'); };
        if (this.prevBtn) this.prevBtn.addEventListener('click', h.prevClick);
        if (this.nextBtn) this.nextBtn.addEventListener('click', h.nextClick);

        // Clique em uma data
        h.dateClick = function (e) {
            var btn = e.target.closest('.htl__date');
            if (!btn || !self.track.contains(btn)) return;
            e.preventDefault();
            self.goTo(self.dateEls.indexOf(btn));
        };
        this.track.addEventListener('click', h.dateClick);

        // Swipe no conteúdo (substitui swipeleft/swiperight do jQuery Mobile)
        var startX = 0;
        var startY = 0;
        h.touchStart = function (e) {
            var t = e.changedTouches[0];
            startX = t.clientX;
            startY = t.clientY;
        };
        h.touchEnd = function (e) {
            var t = e.changedTouches[0];
            var dx = t.clientX - startX;
            var dy = t.clientY - startY;
            if (Math.abs(dx) < self.options.swipeThreshold || Math.abs(dx) < Math.abs(dy)) return;
            if (dx < 0) self.next(); else self.prev();
        };
        if (this.content) {
            this.content.addEventListener('touchstart', h.touchStart, { passive: true });
            this.content.addEventListener('touchend', h.touchEnd, { passive: true });
        }

        // Teclado
        h.keyup = function (e) {
            if (!self.options.keyboard || isTypingTarget(e.target) || !self._inViewport()) return;
            if (e.key === 'ArrowLeft') self.prev();
            else if (e.key === 'ArrowRight') self.next();
        };
        document.addEventListener('keyup', h.keyup);

        // Redimensionamento — ResizeObserver também cobre tab/collapse/modal do Bootstrap
        var raf = null;
        h.resize = function () {
            if (raf) cancelAnimationFrame(raf);
            raf = requestAnimationFrame(function () { self.refresh(); });
        };

        if ('ResizeObserver' in window) {
            this._resizeObserver = new ResizeObserver(h.resize);
            this._resizeObserver.observe(this.wrapper);
        } else {
            window.addEventListener('resize', h.resize);
        }
    };

    /* ---------- Estáticos ---------- */

    HorizontalTimeline.getInstance = function (el) {
        return (el && el[INSTANCE_KEY]) || null;
    };

    HorizontalTimeline.getOrCreateInstance = function (el, options) {
        return HorizontalTimeline.getInstance(el) || new HorizontalTimeline(el, options);
    };

    HorizontalTimeline.init = function (scope) {
        var nodes = (scope || document).querySelectorAll('.htl');
        Array.prototype.forEach.call(nodes, function (el) {
            if (el.dataset.htlAutoinit === 'false') return;
            HorizontalTimeline.getOrCreateInstance(el);
        });
    };

    window.HorizontalTimeline = HorizontalTimeline;

    // Auto-inicialização
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () { HorizontalTimeline.init(); });
    } else {
        HorizontalTimeline.init();
    }
})(window, document);