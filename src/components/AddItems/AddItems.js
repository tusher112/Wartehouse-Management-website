import { useForm } from "react-hook-form";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/product`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div className="w-50 mx-auto">
      <h2>Add Product</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input className="mb-3" placeholder="Name" {...register("name", { required: true, maxLength: 20 })} />
        <input className="mb-3" placeholder="Price" type="number" {...register("price")} />
        <input className="mb-3" placeholder="Quantity" type="number" {...register("quantity")} />
        <input className="mb-3" placeholder="Photo url" type="text" {...register("img")} />
        <textarea className="mb-3" placeholder="Description" {...register("description")} />
        <input type="submit" value="Add product" />
      </form>
    </div>
  );
};

export default AddItems;
