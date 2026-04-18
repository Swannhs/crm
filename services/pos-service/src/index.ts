import { createServiceApp } from "@mymanager/node-service-kit";
import { 
  PosSettingController, 
  PosTableController, 
  PosTableModeController, 
  PosTableOrderController 
} from "./controllers/index.js";
import { identityMiddleware } from "./middleware/identity.js";

const { app, logger } = createServiceApp({ serviceName: "pos-service", jsonLimit: "1mb" });
const auth = identityMiddleware;
const cast = (req: any) => req as any;

const posSettingCtrl = new PosSettingController();
const posTableCtrl = new PosTableController();
const posTableModeCtrl = new PosTableModeController();
const posTableOrderCtrl = new PosTableOrderController();

// --- POS Settings ---
app.get("/v1/pos-settings", (req, res) => posSettingCtrl.get(cast(req), res));
app.patch("/v1/pos-settings/number-pad", auth, (req, res) => posSettingCtrl.updateNumberPad(cast(req), res));
app.patch("/v1/pos-settings/configure-tip", auth, (req, res) => posSettingCtrl.updateConfigureTip(cast(req), res));
app.patch("/v1/pos-settings/void-reasons", auth, (req, res) => posSettingCtrl.saveVoidReasons(cast(req), res));
app.patch("/v1/pos-settings/cfd", auth, (req, res) => posSettingCtrl.saveCFD(cast(req), res));
app.get("/v1/pos-settings/tip-shifts", auth, (req, res) => posSettingCtrl.getTipShifts(cast(req), res));
app.patch("/v1/pos-settings/tip-shifts", auth, (req, res) => posSettingCtrl.updateTipShifts(cast(req), res));

// --- POS Tables ---
app.post("/v1/pos-tables", auth, (req, res) => posTableCtrl.create(cast(req), res));
app.get("/v1/pos-tables", auth, (req, res) => posTableCtrl.get(cast(req), res));
app.get("/v1/pos-tables/all", auth, (req, res) => posTableCtrl.getAll(cast(req), res));
app.put("/v1/pos-tables", auth, (req, res) => posTableCtrl.update(cast(req), res));
app.delete("/v1/pos-tables", auth, (req, res) => posTableCtrl.delete(cast(req), res));
app.put("/v1/pos-tables/increase-seat", auth, (req, res) => posTableCtrl.increaseSeat(cast(req), res));
app.put("/v1/pos-tables/decrease-seat", auth, (req, res) => posTableCtrl.decreaseSeat(cast(req), res));

// --- POS Table Mode ---
app.get("/v1/pos-table-mode", auth, (req, res) => posTableModeCtrl.get(cast(req), res));
app.post("/v1/pos-table-mode", (req, res) => posTableModeCtrl.insert(cast(req), res));
app.patch("/v1/pos-table-mode/:tableNo", (req, res) => posTableModeCtrl.addItem(cast(req), res));
app.patch("/v1/pos-table-mode/add-item/:tableNo", (req, res) => posTableModeCtrl.addSeatItem(cast(req), res));
app.patch("/v1/pos-table-mode/update-quantity/:tableNo", (req, res) => posTableModeCtrl.updateQuantity(cast(req), res));
app.patch("/v1/pos-table-mode/add-modifier/:tableNo", (req, res) => posTableModeCtrl.updateModifiers(cast(req), res));
app.patch("/v1/pos-table-mode/update-guest-seats/:tableNo", (req, res) => posTableModeCtrl.updateGuestAndSeats(cast(req), res));
app.patch("/v1/pos-table-mode/update-table-state/:tableNo", (req, res) => posTableModeCtrl.updateState(cast(req), res));
app.patch("/v1/pos-table-mode/add-guest-seats/:tableNo", (req, res) => posTableModeCtrl.addGuestAndSeats(cast(req), res));

// --- POS Table Orders ---
app.post("/v1/pos-table-orders", auth, (req, res) => posTableOrderCtrl.create(cast(req), res));
app.get("/v1/pos-table-orders", auth, (req, res) => posTableOrderCtrl.getAll(cast(req), res));
app.put("/v1/pos-table-orders", auth, (req, res) => posTableOrderCtrl.update(cast(req), res));
app.delete("/v1/pos-table-orders", auth, (req, res) => posTableOrderCtrl.delete(cast(req), res));

// --- Health ---
app.get("/health", (_req, res) => res.json({ status: "ok", service: "pos-service" }));

const port = Number(process.env.PORT || 7100);
app.listen(port, "0.0.0.0", () => logger.info({ port }, "pos-service listening"));