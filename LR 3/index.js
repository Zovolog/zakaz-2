const bt_image = document.querySelector(".bt-image-search");


const input_image = document.querySelector(".image-option");


  bt_image.addEventListener("click", () => {
    window.open(
      `https://www.google.com/search?sca_esv=580120143&hl=en&sxsrf=AM9HkKm6cDeY0Rw2k8DY83fTp8guqwcLeA:1699371401493&q=${input_image.value}&tbm=isch&source=lnms&sa=X&ved=2ahUKEwjhr-jlm7KCAxWOPxAIHQ9EA5kQ0pQJegQICxAB&biw=1536&bih=739&dpr=1.25`
    );
  });
  
