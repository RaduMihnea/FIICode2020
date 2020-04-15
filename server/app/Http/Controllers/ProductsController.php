<?php

namespace App\Http\Controllers;

use App\Product;
use App\Tag;
use Illuminate\Http\Request;
use phpDocumentor\Reflection\Types\Null_;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (request('tag')) {
            $products = Tag::where('id', request('tag'))->firstOrFail()->products->where('sold_out', 0);
        } else {
            $products = Product::where('sold_out', 0)->get();
        }

        foreach ($products as $product) {
            $product->tags;
        }

        if($products !== null){
            return response()->json($products, 200);
        }
        else return response()->json([]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validateRequest();

        $attributes = request(['title', 'description', 'price', 'seller_id', 'negotiable', 'county_id', 'image', 'max_quantity']);

        $product = Product::create($attributes);

        $product->tags()->attach(request('tags'));

        return response()->json("Product Created");
    }

    /**
     * Display the specified resource.
     *
     * @param Product $product
     * @return \Illuminate\Http\Response
     * @internal param Product $r
     */
    public function show(Product $product)
    {
        $product->tags;

        return response()->json($product);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Product $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        if (auth()->user()->isAdmin() || auth()->user()->id === $product->owner()->id) {
            $this->validateRequest();

            $attributes = request(['title', 'description', 'price', 'seller_id', 'negotiable', 'county_id', 'image', 'max_quantity']);

            $product->update($attributes);

            return response()->json("Product Updated");
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Product $product
     * @return \Illuminate\Http\Response
     * @internal param Product $r
     */
    public function destroy(Product $product)
    {
        if (auth()->user()->isAdmin() || auth()->user()->id === $product->owner->id) {
            $product->delete();

            return response()->json("Product Deleted");
        }
    }

    public function validateRequest()
    {
        return request()->validate([
            'title' => ['required', 'max:255', 'min:3'],
            'description' => ['required', 'min:3'],
            'price' => 'required',
            'tags' => 'exists:tags,id',
            'seller_id' => 'required',
            'county_id' => 'exists:counties,id',
            'image' => 'required',
            'max_quantity' => 'required'
        ]);
    }

}
