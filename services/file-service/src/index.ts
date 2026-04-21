import { createServiceApp, createRoleContextMiddleware, requireOrgRoles } from "@mymanager/node-service-kit";
import { FileManagerController, ImageLibraryController, FileUploadController } from "./controllers/index.js";
import { identityMiddleware } from "./middleware/identity.js";

const { app, logger } = createServiceApp({ serviceName: "file-service", jsonLimit: "10mb" });
const auth = [identityMiddleware, createRoleContextMiddleware()];
const readAccess = [...auth, requireOrgRoles(['org_viewer', 'org_staff', 'org_manager', 'org_admin', 'org_owner'])];
const writeAccess = [...auth, requireOrgRoles(['org_staff', 'org_manager', 'org_admin', 'org_owner'])];
const manageAccess = [...auth, requireOrgRoles(['org_manager', 'org_admin', 'org_owner'])];
const cast = (req: any) => req as any;

const fileManagerCtrl = new FileManagerController();
const imageLibraryCtrl = new ImageLibraryController();
const fileUploadCtrl = new FileUploadController();

// --- File Manager ---
app.post("/v1/file-manager/get-files", readAccess, (req, res) => fileManagerCtrl.getFiles(cast(req), res));
app.post("/v1/file-manager/new-folder", writeAccess, (req, res) => fileManagerCtrl.addNewFolder(cast(req), res));
app.post("/v1/file-manager/fileupload", writeAccess, (req, res) => fileManagerCtrl.uploadFile(cast(req), res));
app.get("/v1/file-manager/get-folder-item/:folderId", readAccess, (req, res) => fileManagerCtrl.getFolderItem(cast(req), res));
app.get("/v1/file-manager/search-file", readAccess, (req, res) => fileManagerCtrl.searchFiles(cast(req), res));
app.put("/v1/file-manager/file/rename/:id", writeAccess, (req, res) => fileManagerCtrl.editFileName(cast(req), res));
app.delete("/v1/file-manager/file/:id", manageAccess, (req, res) => fileManagerCtrl.deleteFile(cast(req), res));
app.put("/v1/file-manager/star-file/:id", writeAccess, (req, res) => fileManagerCtrl.starFile(cast(req), res));
app.put("/v1/file-manager/unstar-file/:id", writeAccess, (req, res) => fileManagerCtrl.unstarFile(cast(req), res));
app.put("/v1/file-manager/share-file/:id", manageAccess, (req, res) => fileManagerCtrl.shareFile(cast(req), res));
app.put("/v1/file-manager/restore-file/:id", manageAccess, (req, res) => fileManagerCtrl.restoreFile(cast(req), res));
app.put("/v1/file-manager/rename-folder/:folderId", writeAccess, (req, res) => fileManagerCtrl.renameFolder(cast(req), res));
app.delete("/v1/file-manager/delete-folder/:folderId", manageAccess, (req, res) => fileManagerCtrl.deleteFolder(cast(req), res));
app.post("/v1/file-manager/share-folder", manageAccess, (req, res) => fileManagerCtrl.shareFolder(cast(req), res));
app.get("/v1/file-manager/shares-folder-me", readAccess, (req, res) => fileManagerCtrl.sharedMeFolder(cast(req), res));
app.post("/v1/file-manager/paste-file", writeAccess, (req, res) => fileManagerCtrl.pasteFile(cast(req), res));
app.delete("/v1/file-manager/clear-all-deleted", manageAccess, (req, res) => fileManagerCtrl.clearAllDeleted(cast(req), res));
app.post("/v1/file-manager/file-content", (req, res) => fileManagerCtrl.getFileContent(cast(req), res));
app.post("/v1/file-manager/file-content-txt", (req, res) => fileManagerCtrl.getTxtFileContent(cast(req), res));

// --- Image Library ---
app.post("/v1/image-library", writeAccess, (req, res) => imageLibraryCtrl.addImage(cast(req), res));
app.get("/v1/image-library", readAccess, (req, res) => imageLibraryCtrl.getImages(cast(req), res));
app.delete("/v1/image-library/:id", manageAccess, (req, res) => imageLibraryCtrl.deleteImage(cast(req), res));

// --- File Upload Progress ---
app.post("/v1/file-manager/upload-file", writeAccess, (req, res) => fileUploadCtrl.uploadFileForProgress(cast(req), res));
app.get("/v1/file-manager/upload-progress/:uploadId", (req, res) => fileUploadCtrl.getProgressUpdate(cast(req), res));

// --- Health ---
app.get("/health", (_req, res) => res.json({ status: "ok", service: "file-service" }));

const port = Number(process.env.PORT || 7130);
app.listen(port, "0.0.0.0", () => logger.info({ port }, "file-service listening"));
