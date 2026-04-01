# 🏔️Northern Trail Outfitters Website

**Northern Trail Outfitters (NTO)** is a demo B2C eCommerce website built entirely with client-side scripts.  
It emulates a realistic shopping experience — ideal for learning, demos, and showcasing front-end capabilities — all without requiring a back-end server.

## Run the Website Locally

To preview the website locally:

1. Clone or download this repository.
2. Open `index.html` in your preferred web browser.

That’s it — the site runs entirely in the browser using static client-side assets.

## Website Scripts

All client-side scripts are located in: `app/static/js/main.js`

You can freely add, edit, or extend scripts here to modify functionality or experiment with new behaviors.

## Reverse Proxy

Some JavaScript resources are retrieved from the live Northern Trail Outfitters site: https://northerntrailoutfitters.com.

When running the site locally, these cross-origin requests can trigger **CORS** errors.  
To resolve this, the `proxy` variable in `main.js` points to an external **serverless function** that acts as a **reverse proxy**.  

This proxy rewrites URLs and resources so that all requests are served via the proxy domain, enabling seamless local testing.

## Image Hosting

The website uses around **2 GB of product and brand images** (e.g., product shots, banners, logos).  
To keep the repository lightweight, these images are hosted externally on **Amazon S3**.

## About This Project

This project is designed to:

- Demonstrate a client-side, simulated eCommerce experience.
- Serve as a foundation for integrating **Agentforce Marketing** and **Data 360** demonstrations.
- Provide a reusable front-end base for partner enablement, education, or proof-of-concept projects.

## License

This project is provided **as-is**, for **educational and demonstration purposes only**. 

## Author

[Eliot Harper](https://github.com/eliotharper)


