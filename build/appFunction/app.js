"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import Express, Path, fsExtra, resizeImage, And getMetadata Modules To Create Our mainAPI
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var fs_extra_1 = __importDefault(require("fs-extra"));
var resizeFunction_1 = __importDefault(require("./resizeFunction"));
var getMetaData_1 = __importDefault(require("./getMetaData"));
// Create mainAPI Router Function
var mainAPI = express_1.default.Router();
mainAPI.get('/imageResize', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var name, width, height, formats, i, imageFullPath, resizedImageFullPath, resizedImage, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                name = String(req.query.name);
                width = Number(req.query.width);
                height = Number(req.query.height);
                formats = ['jpg', 'jpeg', 'png', 'GIF', 'WebP', 'AVIF', 'SVG', 'TIFF'];
                i = 0;
                _a.label = 1;
            case 1:
                if (!(i < formats.length)) return [3 /*break*/, 10];
                imageFullPath = path_1.default.join(__dirname + "./../../images/".concat(name, ".").concat(formats[i]));
                resizedImageFullPath = path_1.default.join(__dirname +
                    "./../../resizedImages/".concat(name, "_w").concat(width, "px_h").concat(height, "px.").concat(formats[i]));
                console.log(imageFullPath);
                console.log(resizedImageFullPath);
                if (!fs_extra_1.default.existsSync(imageFullPath)) return [3 /*break*/, 8];
                console.log("".concat(name, ".").concat(formats[i], " Is Valid Image Name And format"));
                if (!(width >= 1 && height >= 1)) return [3 /*break*/, 6];
                console.log("Image Width And Hight Is Valid: W = ".concat(width, "px, H = ").concat(height, "px"));
                // Checking Image Meta Data
                (0, getMetaData_1.default)(imageFullPath);
                if (!fs_extra_1.default.existsSync(resizedImageFullPath)) return [3 /*break*/, 2];
                try {
                    console.log('Retrieved Existing Resized Image');
                    return [2 /*return*/, res.status(200).sendFile(resizedImageFullPath)];
                }
                catch (error) {
                    console.error(error);
                    res.status(500);
                    return [2 /*return*/];
                }
                return [3 /*break*/, 5];
            case 2:
                _a.trys.push([2, 4, , 5]);
                return [4 /*yield*/, (0, resizeFunction_1.default)(imageFullPath, width, height, resizedImageFullPath)];
            case 3:
                resizedImage = _a.sent();
                return [2 /*return*/, res.status(200).sendFile(resizedImage)];
            case 4:
                error_1 = _a.sent();
                console.error(error_1);
                res.status(500);
                return [2 /*return*/];
            case 5: return [3 /*break*/, 7];
            case 6:
                if (width < 1 && height >= 1) {
                    // Width Error
                    console.log("Error, Invalid Image Width");
                    res
                        .status(404)
                        .send("<h1>Error, Please Enter a Valid Image Width</h1>");
                    return [2 /*return*/];
                }
                else if (width >= 1 && height < 1) {
                    // Height Error
                    console.log("Error, Invalid Image Hight");
                    res
                        .status(404)
                        .send("<h1>Error, Please Enter a Valid Image Height</h1>");
                    return [2 /*return*/];
                }
                else {
                    //Width And Height Error
                    console.log("Error, Invalid Image Width And Hight");
                    res
                        .status(404)
                        .send("<h1>Error, Please Enter a Valid Image Width And Height</h1>");
                    return [2 /*return*/];
                }
                _a.label = 7;
            case 7: return [3 /*break*/, 9];
            case 8:
                //Image Name And Formate Error
                console.log("Error, Invalid Image Name Or Format Not Supported");
                res
                    .status(404)
                    .send("<h1>Error, Please Enter a Valid Image Name And Format</h1>");
                return [2 /*return*/];
            case 9:
                i++;
                return [3 /*break*/, 1];
            case 10: return [2 /*return*/];
        }
    });
}); });
exports.default = mainAPI;
