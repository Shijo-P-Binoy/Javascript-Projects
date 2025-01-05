function getemi() {
    var p = parseInt(document.getElementById("ida").value);
    var iry = parseInt(document.getElementById("idr").value);
    var yr = parseInt(document.getElementById("idy").value);
    var irm = iry / (12 * 100);
    var mn = yr * 12;
    var emit = (p * irm * Math.pow(1 + irm, mn)) / (Math.pow(1 + irm, mn) - 1);
    document.getElementById("emi").value = emit;

}
