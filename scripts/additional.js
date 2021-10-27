$(window).on('load', function() {
        $('#myModal').modal('show');
});
$(document).ready(function(){
    /* Get iframe src attribute value i.e. YouTube video url
    and store it in a variable */
    var url = $("#cartoonVideo").attr('src');
    
    /* Remove iframe src attribute on page load to
    prevent autoplay in background */
    $("#cartoonVideo").attr('src', '');
  
  /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed */
    $("#myModal").on('shown.bs.modal', function(){
        $("#cartoonVideo").attr('src', url);
    });
    
    /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
    $("#myModal").on('hide.bs.modal', function(){
        $("#cartoonVideo").attr('src', '');
    });
});