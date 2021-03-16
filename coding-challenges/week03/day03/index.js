function getInitials(name) {
  var initials = name.charAt(0);
  // console.log(initials)
  for (var i = 0; i < name.length; i++) {
    if (name.charAt(i) == " ") {
      initials = initials.concat(name.charAt(i + 1));
    }
  }
  console.log(initials);
}
getInitials("Mahendra Singh Dhoni");
getInitials("Mamta Banerjee");
getInitials("Shah Rukh Khan")