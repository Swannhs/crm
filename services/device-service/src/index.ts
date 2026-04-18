import { createServiceApp } from "@mymanager/node-service-kit";
import { DeviceController, HardwareController, SunmiController, UnifiController } from "./controllers/index.js";
import { identityMiddleware } from "./middleware/identity.js";

const { app, logger } = createServiceApp({ serviceName: "device-service", jsonLimit: "1mb" });
const auth = identityMiddleware;
const cast = (req: any) => req as any;

const deviceCtrl = new DeviceController();
const hardwareCtrl = new HardwareController();
const sunmiCtrl = new SunmiController();
const unifiCtrl = new UnifiController();

// --- Device Management ---
app.get("/v1/devices", auth, (req, res) => deviceCtrl.list(cast(req), res));
app.post("/v1/devices", auth, (req, res) => deviceCtrl.create(cast(req), res));
app.put("/v1/devices/:id", auth, (req, res) => deviceCtrl.update(cast(req), res));
app.delete("/v1/devices/:id", auth, (req, res) => deviceCtrl.delete(cast(req), res));
app.post("/v1/devices/auth", (req, res) => deviceCtrl.authenticateByCode(cast(req), res));

// --- Hardware Products ---
app.post("/v1/hardware/products", auth, (req, res) => hardwareCtrl.createProduct(cast(req), res));
app.get("/v1/hardware/products", auth, (req, res) => hardwareCtrl.getProducts(cast(req), res));
app.get("/v1/hardware/products/:id", auth, (req, res) => hardwareCtrl.getProductById(cast(req), res));
app.put("/v1/hardware/products/:id", auth, (req, res) => hardwareCtrl.updateProduct(cast(req), res));
app.delete("/v1/hardware/products/:id", auth, (req, res) => hardwareCtrl.deleteProduct(cast(req), res));
app.post("/v1/hardware/products/import", auth, (req, res) => hardwareCtrl.importProducts(cast(req), res));
app.post("/v1/hardware/products/generate-description", auth, (req, res) => hardwareCtrl.generateProductDescription(cast(req), res));

// --- Hardware Bundles ---
app.post("/v1/hardware/bundles", auth, (req, res) => hardwareCtrl.createBundle(cast(req), res));
app.get("/v1/hardware/bundles", auth, (req, res) => hardwareCtrl.getBundles(cast(req), res));
app.get("/v1/hardware/bundles/:id", auth, (req, res) => hardwareCtrl.getBundleById(cast(req), res));
app.put("/v1/hardware/bundles/:id", auth, (req, res) => hardwareCtrl.updateBundle(cast(req), res));
app.delete("/v1/hardware/bundles/:id", auth, (req, res) => hardwareCtrl.deleteBundle(cast(req), res));
app.post("/v1/hardware/bundles/generate-description", auth, (req, res) => hardwareCtrl.generateBundleDescription(cast(req), res));

// --- Hardware Categories ---
app.get("/v1/hardware/categories", auth, (req, res) => hardwareCtrl.getCategories(cast(req), res));
app.post("/v1/hardware/categories", auth, (req, res) => hardwareCtrl.createCategory(cast(req), res));
app.delete("/v1/hardware/categories/:id", auth, (req, res) => hardwareCtrl.deleteCategory(cast(req), res));

// --- Hardware Recommendation (Public) ---
app.get("/v1/hardware/recommendation", (req, res) => hardwareCtrl.getRecommendation(cast(req), res));

// --- Sunmi Device ---
app.get("/v1/sunmi/config", auth, (req, res) => sunmiCtrl.getConfig(cast(req), res));
app.post("/v1/sunmi/config", auth, (req, res) => sunmiCtrl.upsertConfig(cast(req), res));
app.post("/v1/sunmi/test-connection", auth, (req, res) => sunmiCtrl.testConnection(cast(req), res));
app.get("/v1/sunmi/devices", auth, (req, res) => sunmiCtrl.getDevices(cast(req), res));
app.post("/v1/sunmi/devices/status", auth, (req, res) => sunmiCtrl.getDeviceStatus(cast(req), res));
app.get("/v1/sunmi/devices/:sn", auth, (req, res) => sunmiCtrl.getDeviceInfo(cast(req), res));
app.post("/v1/sunmi/devices/:sn/control", auth, (req, res) => sunmiCtrl.applyControl(cast(req), res));
app.get("/v1/sunmi/groups", auth, (req, res) => sunmiCtrl.getGroups(cast(req), res));
app.post("/v1/sunmi/groups", auth, (req, res) => sunmiCtrl.createGroup(cast(req), res));

// --- UniFi Protect ---
app.post("/v1/unifi/connection", auth, (req, res) => unifiCtrl.saveConnection(cast(req), res));
app.get("/v1/unifi/connection", auth, (req, res) => unifiCtrl.getConnection(cast(req), res));
app.delete("/v1/unifi/connection", auth, (req, res) => unifiCtrl.deleteConnection(cast(req), res));
app.get("/v1/unifi/connections", auth, (req, res) => unifiCtrl.getConnections(cast(req), res));
app.post("/v1/unifi/test-connection", auth, (req, res) => unifiCtrl.testConnection(cast(req), res));
app.get("/v1/unifi/discover-hosts", auth, (req, res) => unifiCtrl.discoverHosts(cast(req), res));
app.get("/v1/unifi/cloud-devices", auth, (req, res) => unifiCtrl.getCloudDevices(cast(req), res));
app.get("/v1/unifi/cameras", auth, (req, res) => unifiCtrl.getCameras(cast(req), res));
app.get("/v1/unifi/cameras/:id", auth, (req, res) => unifiCtrl.getCameraDetails(cast(req), res));
app.get("/v1/unifi/cameras/:id/snapshot", auth, (req, res) => unifiCtrl.getCameraSnapshot(cast(req), res));
app.post("/v1/unifi/cameras/:id/rtsps-stream", auth, (req, res) => unifiCtrl.createRtspsStream(cast(req), res));
app.get("/v1/unifi/cameras/:id/rtsps-stream", auth, (req, res) => unifiCtrl.getRtspsStream(cast(req), res));
app.delete("/v1/unifi/cameras/:id/rtsps-stream", auth, (req, res) => unifiCtrl.deleteRtspsStream(cast(req), res));
app.post("/v1/unifi/cameras/:id/ptz/goto/:slot", auth, (req, res) => unifiCtrl.ptzGotoPreset(cast(req), res));
app.post("/v1/unifi/cameras/:id/ptz/patrol/start/:slot", auth, (req, res) => unifiCtrl.ptzPatrolStart(cast(req), res));
app.post("/v1/unifi/cameras/:id/ptz/patrol/stop", auth, (req, res) => unifiCtrl.ptzPatrolStop(cast(req), res));
app.get("/v1/unifi/nvr", auth, (req, res) => unifiCtrl.getNvrInfo(cast(req), res));
app.get("/v1/unifi/liveviews", auth, (req, res) => unifiCtrl.getLiveViews(cast(req), res));
app.get("/v1/unifi/recordings/:cameraId", auth, (req, res) => unifiCtrl.getRecordings(cast(req), res));
app.put("/v1/unifi/assign", auth, (req, res) => unifiCtrl.assignDevice(cast(req), res));
app.put("/v1/unifi/unassign", auth, (req, res) => unifiCtrl.unassignDevice(cast(req), res));
app.get("/v1/unifi/assignments", auth, (req, res) => unifiCtrl.getAssignments(cast(req), res));

// --- Health ---
app.get("/health", (_req, res) => res.json({ status: "ok", service: "device-service" }));

const port = Number(process.env.PORT || 7120);
app.listen(port, "0.0.0.0", () => logger.info({ port }, "device-service listening"));