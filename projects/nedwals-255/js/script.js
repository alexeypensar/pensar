"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var nav = document.getElementById('headerNav');

  var fixingNav = function fixingNav() {
    var scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);

    if (scrollHeight >= 991.98) {
      window.addEventListener('scroll', function () {
        if (window.scrollY >= 700) {
          nav.classList.add('fixed-header');
        } else {
          nav.classList.remove('fixed-header');
        }
      });
    }
  };

  fixingNav();
  window.addEventListener('resize', function () {
    fixingNav();
  });
  var mobileMenuButton = document.getElementById('mobileMenuButton');
  var mobileMenu = document.getElementById('headerNav');
  var mobileMenuCloseButton = document.getElementById('mobileMenuCloseButton');
  var headerLinksArrow = Array.from(document.getElementsByClassName('mobile__link_arrow'));
  var mobileMenuLinks = Array.from(document.getElementsByClassName('header__nav a'));
  mobileMenuLinks.push(document.getElementById('headerOrderButton'));
  var sublist = Array.from(document.getElementsByClassName('header__sublist'));
  var body = document.getElementsByTagName('body')[0];
  mobileMenuButton.addEventListener('click', function () {
    mobileMenu.classList.add('header__nav_active');
    body.classList.add('shadow');
  });
  mobileMenuCloseButton.addEventListener('click', function () {
    mobileMenu.classList.remove('header__nav_active');
    body.classList.remove('shadow');
  });
  headerLinksArrow.forEach(function (el) {
    el.addEventListener('click', function () {
      var index = headerLinksArrow.indexOf(el);
      el.classList.toggle('header__link_arrow_active');
      sublist[index].classList.toggle('header__sublist_active');
    });
  });
  mobileMenuLinks.forEach(function (el) {
    el.addEventListener('click', function () {
      mobileMenu.classList.remove('header__nav_active');
      body.classList.remove('shadow');
    });
  });
});