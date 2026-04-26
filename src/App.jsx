import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CookieConsentBanner from "./components/CookieConsentBanner";

// Lazy load pages for code splitting
const Home = lazy(() => import("./pages/Home"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Cookies = lazy(() => import("./pages/Cookies"));
const Legal = lazy(() => import("./pages/Legal"));
const Blog = lazy(() =>
  import("./pages/Blog").then((m) => ({ default: m.default })),
);
const BlogPost = lazy(() =>
  import("./pages/Blog").then((m) => ({ default: m.BlogPost })),
);

// Minimal loading fallback
function LoadingFallback() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "#0a0a0a",
      }}
    >
      <div
        style={{
          width: 32,
          height: 32,
          border: "3px solid rgba(255,255,255,0.1)",
          borderTop: "3px solid #fff",
          borderRadius: "50%",
          animation: "spin 0.8s linear infinite",
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <CookieConsentBanner />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
