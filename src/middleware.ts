import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define which routes are protected
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)", // Protect all routes under /dashboard
  "/", // Protect the home page
]);

// Middleware function to handle route protection
const middleware = clerkMiddleware((auth, req) => {
  console.log(`Request URL: ${req.url}`); // Log the request URL
  if (isProtectedRoute(req)) {
    console.log(`Protected route accessed: ${req.url}`); // Log if the route is protected
    auth().protect(); // Apply protection if route is protected
  }
});

export default middleware;

// Configuration for the middleware to match appropriate routes
export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)", // Match all routes except those containing a dot or _next
    "/", // Match the root route
    "/(api|trpc)(.*)", // Match all routes under /api or /trpc
  ],
};
