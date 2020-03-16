@extends('layouts.app')

@section('content')

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">

                <div class="card-body">

                    <div class="card" style="margin-bottom: 2em">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-8">
                                    <h5 class="card-title">{{$product->title}}</h5>
                                    <p class="card-body">{{$product->description}}</p>
                                    <p class="card-body">{{$product->price}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <form id="product-form {{$product->id}}"  method="POST" action="/products/{{$product->id}}">
                                    <button class="alert-danger" type="submit">DELETE</button>
                                    @method('DELETE')
                                    @csrf
                                </form>
                                <a class="action" style="margin-left: 5em" href="{{"/products/" . $product->id . "/edit"}}">EDIT</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection

