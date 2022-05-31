function valida(f) {
  var ok = true;
  var msg = "Debes escribir contenido en los campos:\n";
  
  if(f.elements[0].value == "")
  {
    msg += "- marca1\n";
    ok = false;
  }

  if(f.elements[1].value == "")
  {
    msg += "- marca2\n";
    ok = false;
  }

  if(f.elements[2].value == "")
  {
    msg += "- marca3\n";
    ok = false;
  }

  if(ok == false)
    alert(msg);
  return ok;
}