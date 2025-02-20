# Getting Started with this Garage store page

This is a Garage Store page forked from @mattmoreira/garage-sale (which is also forked from @marcbarbosa/garage).

Feel free to fork it and use to also sell your products!

This project uses Swell [Swell.is](https://swell.is) to manage the products, so you can have a nice UI to manage your products!

You can just deploy it using Github Actions, after making sure to change the following files:

```
index.html -> Change the title to whatever you want
src/Contact.md -> You can have a nice introduction about your sales in Markdown

```

Then you need to create an account on Swell, then create two secrets on Github Actions:
* SWELL_STORE_ID
* SWELL_PUBLIC_TOKEN

These values can be found on Swell's console after creating your account.

You can also create a local `.env.local` file to test locally using `npm run start`


```
VITE_SWELL_STORE_ID=<<<your-store-id>>>
VITE_SWELL_PUBLIC_TOKEN=<<<your-public-token>>>

```

Have fun!