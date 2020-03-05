@extends ('layout')

@section ('content')

<div class="content">
    <div class="title m-b-md">
        New Article
    </div>

    <form method="POST" action="/articles">
        @csrf

        <div class="field">
            <label class="label" for="title">Title</label>

            <div class="control">
                <input class="input" type="text" name="title" id="title">
            </div>
        </div>

        <div class="field">
            <label class="label" for="description">Description</label>

            <div class="control">
                <input class="input" type="text" name="description" id="description">
            </div>
        </div>

        <div class="field">
            <label class="label" for="price">Price</label>

            <div class="control">
                <input class="input" type="number" name="price" id="price">
            </div>
        </div>

        <div class="field">
            <label class="label" for="location">Location</label>

            <div class="control">
                <input class="input" type="text" name="location" id="location">
            </div>
        </div>

        <div class="field is-grouped">
            <div class="control">
                <button class="button is-link" type="submit">Submit</button>
            </div>
        </div>

    </form>

</div>

@endsection
