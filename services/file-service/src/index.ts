import { createServiceApp } from "@mymanager/node-service-kit";
import { FileManagerController, ImageLibraryController, FileUploadController } from "./controllers/index.js";
import { identityMiddleware } from "./middleware/identity.js";

const { app, logger } = createServiceApp({ serviceName: "file-service", jsonLimit: "10mb" });
const auth = identityMiddleware;
const cast = (req: any) => req as any;

const fileManagerCtrl = new FileManagerController();
const imageLibraryCtrl = new ImageLibraryController();
const fileUploadCtrl = new FileUploadController();

// --- File Manager ---
app.post("/v1/file-manager/get-files", auth, (req, res) => fileManagerCtrl.getFiles(cast(req), res));
app.post("/v1/file-manager/new-folder", auth, (req, res) => fileManagerCtrl.addNewFolder(cast(req), res));
app.post("/v1/file-manager/fileupload", auth, (req, res) => fileManagerCtrl.uploadFile(cast(req), res));
app.get("/v1/file-manager/get-folder-item/:folderId", auth, (req, res) => fileManagerCtrl.getFolderItem(cast(req), res));
app.get("/v1/file-manager/search-file", auth, (req, res) => fileManagerCtrl.searchFiles(cast(req), res));
app.put("/v1/file-manager/file/rename/:id", auth, (req, res) => fileManagerCtrl.editFileName(cast(req), res));
app.delete("/v1/file-manager/file/:id", auth, (req, res) => fileManagerCtrl.deleteFile(cast(req), res));
app.put("/v1/file-manager/star-file/:id", auth, (req, res) => fileManagerCtrl.starFile(cast(req), res));
app.put("/v1/file-manager/unstar-file/:id", auth, (req, res) => fileManagerCtrl.unstarFile(cast(req), res));
app.put("/v1/file-manager/share-file/:id", auth, (req, res) => fileManagerCtrl.shareFile(cast(req), res));
app.put("/v1/file-manager/restore-file/:id", auth, (req, res) => fileManagerCtrl.restoreFile(cast(req), res));
app.put("/v1/file-manager/rename-folder/:folderId", auth, (req, res) => fileManagerCtrl.renameFolder(cast(req), res));
app.delete("/v1/file-manager/delete-folder/:folderId", auth, (req, res) => fileManagerCtrl.deleteFolder(cast(req), res));
app.post("/v1/file-manager/share-folder", auth, (req, res) => fileManagerCtrl.shareFolder(cast(req), res));
app.get("/v1/file-manager/shares-folder-me", auth, (req, res) => fileManagerCtrl.sharedMeFolder(cast(req), res));
app.post("/v1/file-manager/paste-file", auth, (req, res) => fileManagerCtrl.pasteFile(cast(req), res));
app.delete("/v1/file-manager/clear-all-deleted", auth, (req, res) => fileManagerCtrl.clearAllDeleted(cast(req), res));
app.post("/v1/file-manager/file-content", (req, res) => fileManagerCtrl.getFileContent(cast(req), res));
app.post("/v1/file-manager/file-content-txt", (req, res) => fileManagerCtrl.getTxtFileContent(cast(req), res));

// --- Image Library ---
app.post("/v1/image-library", auth, (req, res) => imageLibraryCtrl.addImage(cast(req), res));
app.get("/v1/image-library", auth, (req, res) => imageLibraryCtrl.getImages(cast(req), res));
app.delete("/v1/image-library/:id", auth, (req, res) => imageLibraryCtrl.deleteImage(cast(req), res));

// --- File Upload Progress ---
app.post("/v1/file-manager/upload-file", auth, (req, res) => fileUploadCtrl.uploadFileForProgress(cast(req), res));
app.get("/v1/file-manager/upload-progress/:uploadId", (req, res) => fileUploadCtrl.getProgressUpdate(cast(req), res));

// --- Health ---
app.get("/health", (_req, res) => res.json({ status: "ok", service: "file-service" }));

const port = Number(process.env.PORT || 7130);
app.listen(port, "0.0.0.0", () => logger.info({ port }, "file-service listening"));