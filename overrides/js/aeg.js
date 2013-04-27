$(function () {
    var aeg = {};
    aeg = {
        initMap: function () {
            var myLatlng = new google.maps.LatLng(-34.397, 150.644);
            var myOptions = {
                zoom: 8,
                center: myLatlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById("content__rblb"), myOptions);
        },
        init: function () {
            var self = this;
            self.resizeAegGrid();
            self.initMap();
        },
        resizeAegGrid: function () {
            var $aside = $('#menuInner'),
                $footer = $('#footer'),
                $contentL = $('#content__l'),
                $contentRT = $('#content__rt'),
                $contentRB = $('#content__rb'),
                $contentRBL = $('#content__rbl'),
                $contentRBR = $('#content__rbr'),
                $contentRBLT = $('#content__rblt'),
                $contentRBLB = $('#content__rblb'),
                hH = $('.navbar.main').outerHeight(),
                fH = $footer.outerHeight(),
                wH = $(window).height(),
                diffH = wH - fH - hH;
            $aside.height(diffH);
            $contentL.height(diffH);

            $contentRT.height(diffH * 0.45);
            $contentRB.height(diffH * 0.55);

            $contentRBR.height(diffH * 0.55);
            $contentRBL.height(diffH * 0.55);

            $contentRBLT.height(diffH * 0.35);
            $contentRBLB.height(diffH * 0.2);

        }
    };
    $(document).ready(function () {
        aeg.init();
    })
    $(window).resize(function () {
        aeg.resizeAegGrid();
    })
})();