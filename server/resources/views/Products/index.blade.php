@extends('layouts.app')

@section('content')

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">

                <div class="card-body">

                    @forelse($products as $product)
                    <div class="card" style="margin-bottom: 2em">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-8">
                                    <a href="{{'/products/' . $product->id}}"><h5 class="card-title">{{$product->title}}</h5></a>
                                    @if($product->description)<p class="card-body">{{$product->description}}</p>@endif
                                </div>
                            </div>
                        </div>
                    </div>
                    @empty
                        <p>No relevant products yet.</p>
                    @endforelse
                </div>
            </div>
        </div>
    </div>
</div>

@endsection

