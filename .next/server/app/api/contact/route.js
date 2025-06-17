"use strict";
(() => {
var exports = {};
exports.id = 386;
exports.ids = [386];
exports.modules = {

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 7459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/contact/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(9513);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(9335);
;// CONCATENATED MODULE: ./app/api/contact/route.js

// import { sendEmail } from '@/utils/email';
async function POST(request) {
    try {
        // Log the full request details
        console.log("Request headers:", Object.fromEntries(request.headers));
        // Validate environment variables
        if (!process.env.SENDGRID_API_KEY || !process.env.EMAIL_FROM) {
            console.error("Missing required environment variables:", {
                hasApiKey: !!process.env.SENDGRID_API_KEY,
                hasFromEmail: !!process.env.EMAIL_FROM,
                apiKeyLength: process.env.SENDGRID_API_KEY?.length,
                fromEmail: process.env.EMAIL_FROM
            });
            return next_response/* default */.Z.json({
                error: "Email service is not properly configured"
            }, {
                status: 503
            });
        }
        const body = await request.json();
        console.log("Received request body:", body);
        const { name, mobile, email, homeType, location } = body;
        // Validate required fields
        if (!name || !mobile || !email || !homeType || !location) {
            return next_response/* default */.Z.json({
                error: "All fields are required"
            }, {
                status: 400
            });
        }
        // Comment out email sending code
        // const emailResponse = await sendEmail({
        //   subject: `New Consultation Request from ${name}`,
        //   text: `
        //     New Consultation Request Details:
        //     
        //     Name: ${name}
        //     Mobile: ${mobile}
        //     Email: ${email}
        //     Home Type: ${homeType}
        //     Location: ${location}
        //     
        //     Time submitted: ${new Date().toLocaleString()}
        //   `,
        //   html: `
        //     <h2>New Consultation Request</h2>
        //     <p><strong>Name:</strong> ${name}</p>
        //     <p><strong>Mobile:</strong> ${mobile}</p>
        //     <p><strong>Email:</strong> ${email}</p>
        //     <p><strong>Home Type:</strong> ${homeType}</p>
        //     <p><strong>Location:</strong> ${location}</p>
        //     <p><strong>Time submitted:</strong> ${new Date().toLocaleString()}</p>
        //   `,
        // });
        // if (!emailResponse.success) {
        //   console.error('Email sending failed:', emailResponse.error);
        //   return NextResponse.json(
        //     { error: `Failed to send email: ${emailResponse.error}` },
        //     { status: 500 }
        //   );
        // }
        // console.log('Email sent successfully:', emailResponse.response);
        return next_response/* default */.Z.json({
            message: "Consultation request submitted successfully"
        }, {
            status: 200
        });
    } catch (error) {
        console.error("Error in contact API:", error);
        return next_response/* default */.Z.json({
            error: `Failed to process request: ${error.message}`
        }, {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fcontact%2Froute&name=app%2Fapi%2Fcontact%2Froute&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.js&appDir=C%3A%5CUsers%5CASUS%5CDesktop%5Cabhiram-main%5Capp&appPaths=%2Fapi%2Fcontact%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/contact/route",
        pathname: "/api/contact",
        filename: "route",
        bundlePath: "app/api/contact/route"
    },
    resolvedPagePath: "C:\\Users\\ASUS\\Desktop\\abhiram-main\\app\\api\\contact\\route.js",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/contact/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,501,335], () => (__webpack_exec__(7459)));
module.exports = __webpack_exports__;

})();