$(".deleteStudent").on("click", function () {
    var id = $(this).attr('value');
    console.log(id);
    $.ajax({
      url: "/students/student/" + id,
      type: "DELETE",
      dataType: "json",
      data: id,
      success: function (data) {
        id.hide();
      }
    });
    window.location.replace('/students');
});