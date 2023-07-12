$("prof-pic").onerror = function(message, source, lineno, colno, error) {
    this.onerror=null;
    $('.responsive-img-srcset').remove();
}
