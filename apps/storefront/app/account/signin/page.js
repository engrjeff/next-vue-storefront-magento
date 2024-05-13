"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SignInForm_1 = __importDefault(require("@/components/SignInForm"));
function SignInPage() {
    return (<div className="container max-w-3xl">
      <SignInForm_1.default />
    </div>);
}
exports.default = SignInPage;
