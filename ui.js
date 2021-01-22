//aqui se programara la ui
import Product from "./products.js";
import ProductManagement from "./products.js";

class UI {
    constructor() {

        this.form = document.getElementById("form");
        this.container = document.getElementById("containertable");
        console.log("LOAD");
        this.productmanagement = new ProductManagement();

        this.productmanagement.addProduct("Pollo", "Pollo dofia", 12);
        this.productmanagement.addProduct("Carne", "Santa cruz", 11);
        this.productmanagement.addProduct("Leche", "leche Pil", 100);
        this.productmanagement.addProduct("Tee", "Tee Windsor", 123);
        this.lisproducts = this.productmanagement.getList();
        //this.lisproducts = productmanagement.getList();
        this.loadEvents();
        this.loadTable();
    }
    loadTable() {
        this.html = `
        <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">descrip.</th>
            <th scope="col">cantidad</th>
          </tr>
        </thead>
        <tbody>
        `;
        for (var i = 0; i < this.lisproducts.length; i++) {
            this.html += `<tr>
            <th scope="row">${i}</th>
            <td><input type="text" name="número" value ="${this.lisproducts[i].getName()}" placeholder="nombre de producto"></td>
            <td><input type="text" name="número" value ="${this.lisproducts[i].getDescription()}" placeholder="nombre de producto"></td>
            <td><input type="number" name="número" value ="${this.lisproducts[i].getQuantity()}" placeholder="nombre de producto"></td>
            <td><button type="button" class="btn btn-danger" ids="${i}">Borrar</button></td>
            <td><button type="submit" onclick="modificando()">Actualizar</button></td>
          </tr>`;

        }
        this.html += `
        </tbody>
              </table>

        `;
        this.container.innerHTML = this.html;
        var buttons = document.querySelectorAll("button");
        for (var i = 0; i < buttons.length; i++){
          if (i%2 == 0) {
            buttons[i].addEventListener("click", (e) => {
                var product = this.lisproducts[Number(e.target.getAttribute("ids"))];
                this.productmanagement.removeProducts(product);
                this.loadTable();
            });
          }

        }
    }
  modificando(name, description, quantity) {
    var date = new Date();
    var product = new Product(date, name, description, quantity);
    this.listproducts.push(product);
  }
    loadEvents() {
        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
            var name = document.getElementsByName("name");
            var description = document.getElementsByName("description");
            var quantity = document.getElementsByName("quantity");

            this.productmanagement.addProduct(name[0].value, description[0].value, quantity[0].value);
            this.loadTable();
        })
    }
}
var init = new UI();
