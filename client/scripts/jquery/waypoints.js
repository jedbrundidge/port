/**
 * Created by jed on 6/9/2016.
 */

$('#knabba').css('opacity', 0);
$('#carischApp').css('opacity', 0);
$('#curling').css('opacity', 0);
$('#picture').css('opacity', 0);
$('#contentArea').css('opacity', 0);
$('#address').css('opacity', 0);
$('#phone').css('opacity', 0);
$('#address').css('opacity', 0);
$('#contactHeader').css('opacity', 0);


var $points1 = $('#sectionProjects');
var $points2 = $('#sectionAbout');
var $points3 = $('#sectionContact');


$points1.waypoint(function () {
    $('#knabba').toggleClass('fadeInLeft');
    $('#carischApp').toggleClass('fadeInRight');
    $('#curling').toggleClass('fadeInUp');
}, {offset: '58%'});


$points2.waypoint(function () {
    $('#contentArea').toggleClass('fadeInUp');
    $('#picture').toggleClass('fadeInDown');
}, {offset: '58%'});


$points3.waypoint(function () {
    $('#contactHeader').toggleClass('fadeInDown');
    $('#address').toggleClass('fadeInUp');;
    $('#email').toggleClass('fadeInUp');;
    $('#phone').toggleClass('fadeInUp');;
}, {offset: '58%'});