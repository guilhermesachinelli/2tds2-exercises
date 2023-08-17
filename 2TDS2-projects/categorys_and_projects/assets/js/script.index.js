class Category{
    constructor(id, name){
        this.id  = id;
        this.name = name;
        this.products = [];
    }
}
class Products{
    constructor(id, name, price, category){
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}
class CategoryService{
    constructor(){
        this.categories = [];
        this.nextCategoryId = 0;
    }
    addCategory(name){
        const id = this.nextCategoryId ++;
        const category = new Category(id, name);
        this.categories.push(category);
    }
}
class ProductService{
    constructor(){
        this.products = [];
        this.nextProductId = 0;
    }
    addProduct(name, price, category){
        const id = this.nextProductId ++;
        const product = new this.Products(id, name, price, category);
        this.products.push(product);
    }
}
const categoryList = new CategoryService();
function createCategory(){
    const categorieName = "Doce";
    categoryList.addCategory(categorieName);
    console.log(categoryList.categories);
}