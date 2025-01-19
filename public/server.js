// @bun
process.env.IS_SERVE_PROCESS ??= true;
process.env.IS_PROD ??= true;
process.env.BRISA_SRC_DIR ??= import.meta.dirname;
process.env.BRISA_BUILD_FOLDER ??= import.meta.dirname;
process.env.BRISA_ROOT_DIR ??= import.meta.dirname;
// node_modules/brisa/out/cli/serve/index.js
import { createRequire as te } from "module";
import I from "cluster";
import { cpus as qn } from "os";
import L from "path";
import ve from "path";
import Sa from "path";
import { fileURLToPath as re } from "url";
import { createRequire as le } from "module";
import me from "path";
import { pathToFileURL as de } from "url";
import Ia from "process";
import be from "os";
import _i from "tty";
import Da from "fs";
import Ai from "crypto";
import P from "path";
import S from "process";
import Xn from "path";
import Fa from "fs";
import fa from "path";
import un from "crypto";
import ln from "process";
import wn from "fs";
import gi from "fs";
import hi from "path";
import ha from "process";
import Oe from "child_process";
import Bn from "fs";
import { pipeline as as } from "stream";
import fs from "path";
import An from "path";
import os from "fs";
import Vn from "fs";
import Zs from "path";
import Is from "https";
import qs from "http";
var ee = Object.create;
var { getPrototypeOf: se, defineProperty: Ni, getOwnPropertyNames: oe } = Object;
var ce = Object.prototype.hasOwnProperty;
var pe = (a, n, i) => {
  i = a != null ? ee(se(a)) : {};
  let e = n || !a || !a.__esModule ? Ni(i, "default", { value: a, enumerable: true }) : i;
  for (let s of oe(a))
    if (!ce.call(e, s))
      Ni(e, s, { get: () => a[s], enumerable: true });
  return e;
};
var Ra = (a, n) => () => (n || a((n = { exports: {} }).exports, n), n.exports);
var Ca = te(import.meta.url);
var On = Ra((Ar, Hs) => {
  Hs.exports = { "application/1d-interleaved-parityfec": { source: "iana" }, "application/3gpdash-qoe-report+xml": { source: "iana", charset: "UTF-8", compressible: true }, "application/3gpp-ims+xml": { source: "iana", compressible: true }, "application/3gpphal+json": { source: "iana", compressible: true }, "application/3gpphalforms+json": { source: "iana", compressible: true }, "application/a2l": { source: "iana" }, "application/ace+cbor": { source: "iana" }, "application/activemessage": { source: "iana" }, "application/activity+json": { source: "iana", compressible: true }, "application/alto-costmap+json": { source: "iana", compressible: true }, "application/alto-costmapfilter+json": { source: "iana", compressible: true }, "application/alto-directory+json": { source: "iana", compressible: true }, "application/alto-endpointcost+json": { source: "iana", compressible: true }, "application/alto-endpointcostparams+json": { source: "iana", compressible: true }, "application/alto-endpointprop+json": { source: "iana", compressible: true }, "application/alto-endpointpropparams+json": { source: "iana", compressible: true }, "application/alto-error+json": { source: "iana", compressible: true }, "application/alto-networkmap+json": { source: "iana", compressible: true }, "application/alto-networkmapfilter+json": { source: "iana", compressible: true }, "application/alto-updatestreamcontrol+json": { source: "iana", compressible: true }, "application/alto-updatestreamparams+json": { source: "iana", compressible: true }, "application/aml": { source: "iana" }, "application/andrew-inset": { source: "iana", extensions: ["ez"] }, "application/applefile": { source: "iana" }, "application/applixware": { source: "apache", extensions: ["aw"] }, "application/at+jwt": { source: "iana" }, "application/atf": { source: "iana" }, "application/atfx": { source: "iana" }, "application/atom+xml": { source: "iana", compressible: true, extensions: ["atom"] }, "application/atomcat+xml": { source: "iana", compressible: true, extensions: ["atomcat"] }, "application/atomdeleted+xml": { source: "iana", compressible: true, extensions: ["atomdeleted"] }, "application/atomicmail": { source: "iana" }, "application/atomsvc+xml": { source: "iana", compressible: true, extensions: ["atomsvc"] }, "application/atsc-dwd+xml": { source: "iana", compressible: true, extensions: ["dwd"] }, "application/atsc-dynamic-event-message": { source: "iana" }, "application/atsc-held+xml": { source: "iana", compressible: true, extensions: ["held"] }, "application/atsc-rdt+json": { source: "iana", compressible: true }, "application/atsc-rsat+xml": { source: "iana", compressible: true, extensions: ["rsat"] }, "application/atxml": { source: "iana" }, "application/auth-policy+xml": { source: "iana", compressible: true }, "application/bacnet-xdd+zip": { source: "iana", compressible: false }, "application/batch-smtp": { source: "iana" }, "application/bdoc": { compressible: false, extensions: ["bdoc"] }, "application/beep+xml": { source: "iana", charset: "UTF-8", compressible: true }, "application/calendar+json": { source: "iana", compressible: true }, "application/calendar+xml": { source: "iana", compressible: true, extensions: ["xcs"] }, "application/call-completion": { source: "iana" }, "application/cals-1840": { source: "iana" }, "application/captive+json": { source: "iana", compressible: true }, "application/cbor": { source: "iana" }, "application/cbor-seq": { source: "iana" }, "application/cccex": { source: "iana" }, "application/ccmp+xml": { source: "iana", compressible: true }, "application/ccxml+xml": { source: "iana", compressible: true, extensions: ["ccxml"] }, "application/cdfx+xml": { source: "iana", compressible: true, extensions: ["cdfx"] }, "application/cdmi-capability": { source: "iana", extensions: ["cdmia"] }, "application/cdmi-container": { source: "iana", extensions: ["cdmic"] }, "application/cdmi-domain": { source: "iana", extensions: ["cdmid"] }, "application/cdmi-object": { source: "iana", extensions: ["cdmio"] }, "application/cdmi-queue": { source: "iana", extensions: ["cdmiq"] }, "application/cdni": { source: "iana" }, "application/cea": { source: "iana" }, "application/cea-2018+xml": { source: "iana", compressible: true }, "application/cellml+xml": { source: "iana", compressible: true }, "application/cfw": { source: "iana" }, "application/city+json": { source: "iana", compressible: true }, "application/clr": { source: "iana" }, "application/clue+xml": { source: "iana", compressible: true }, "application/clue_info+xml": { source: "iana", compressible: true }, "application/cms": { source: "iana" }, "application/cnrp+xml": { source: "iana", compressible: true }, "application/coap-group+json": { source: "iana", compressible: true }, "application/coap-payload": { source: "iana" }, "application/commonground": { source: "iana" }, "application/conference-info+xml": { source: "iana", compressible: true }, "application/cose": { source: "iana" }, "application/cose-key": { source: "iana" }, "application/cose-key-set": { source: "iana" }, "application/cpl+xml": { source: "iana", compressible: true, extensions: ["cpl"] }, "application/csrattrs": { source: "iana" }, "application/csta+xml": { source: "iana", compressible: true }, "application/cstadata+xml": { source: "iana", compressible: true }, "application/csvm+json": { source: "iana", compressible: true }, "application/cu-seeme": { source: "apache", extensions: ["cu"] }, "application/cwt": { source: "iana" }, "application/cybercash": { source: "iana" }, "application/dart": { compressible: true }, "application/dash+xml": { source: "iana", compressible: true, extensions: ["mpd"] }, "application/dash-patch+xml": { source: "iana", compressible: true, extensions: ["mpp"] }, "application/dashdelta": { source: "iana" }, "application/davmount+xml": { source: "iana", compressible: true, extensions: ["davmount"] }, "application/dca-rft": { source: "iana" }, "application/dcd": { source: "iana" }, "application/dec-dx": { source: "iana" }, "application/dialog-info+xml": { source: "iana", compressible: true }, "application/dicom": { source: "iana" }, "application/dicom+json": { source: "iana", compressible: true }, "application/dicom+xml": { source: "iana", compressible: true }, "application/dii": { source: "iana" }, "application/dit": { source: "iana" }, "application/dns": { source: "iana" }, "application/dns+json": { source: "iana", compressible: true }, "application/dns-message": { source: "iana" }, "application/docbook+xml": { source: "apache", compressible: true, extensions: ["dbk"] }, "application/dots+cbor": { source: "iana" }, "application/dskpp+xml": { source: "iana", compressible: true }, "application/dssc+der": { source: "iana", extensions: ["dssc"] }, "application/dssc+xml": { source: "iana", compressible: true, extensions: ["xdssc"] }, "application/dvcs": { source: "iana" }, "application/ecmascript": { source: "iana", compressible: true, extensions: ["es", "ecma"] }, "application/edi-consent": { source: "iana" }, "application/edi-x12": { source: "iana", compressible: false }, "application/edifact": { source: "iana", compressible: false }, "application/efi": { source: "iana" }, "application/elm+json": { source: "iana", charset: "UTF-8", compressible: true }, "application/elm+xml": { source: "iana", compressible: true }, "application/emergencycalldata.cap+xml": { source: "iana", charset: "UTF-8", compressible: true }, "application/emergencycalldata.comment+xml": { source: "iana", compressible: true }, "application/emergencycalldata.control+xml": { source: "iana", compressible: true }, "application/emergencycalldata.deviceinfo+xml": { source: "iana", compressible: true }, "application/emergencycalldata.ecall.msd": { source: "iana" }, "application/emergencycalldata.providerinfo+xml": { source: "iana", compressible: true }, "application/emergencycalldata.serviceinfo+xml": { source: "iana", compressible: true }, "application/emergencycalldata.subscriberinfo+xml": { source: "iana", compressible: true }, "application/emergencycalldata.veds+xml": { source: "iana", compressible: true }, "application/emma+xml": { source: "iana", compressible: true, extensions: ["emma"] }, "application/emotionml+xml": { source: "iana", compressible: true, extensions: ["emotionml"] }, "application/encaprtp": { source: "iana" }, "application/epp+xml": { source: "iana", compressible: true }, "application/epub+zip": { source: "iana", compressible: false, extensions: ["epub"] }, "application/eshop": { source: "iana" }, "application/exi": { source: "iana", extensions: ["exi"] }, "application/expect-ct-report+json": { source: "iana", compressible: true }, "application/express": { source: "iana", extensions: ["exp"] }, "application/fastinfoset": { source: "iana" }, "application/fastsoap": { source: "iana" }, "application/fdt+xml": { source: "iana", compressible: true, extensions: ["fdt"] }, "application/fhir+json": { source: "iana", charset: "UTF-8", compressible: true }, "application/fhir+xml": { source: "iana", charset: "UTF-8", compressible: true }, "application/fido.trusted-apps+json": { compressible: true }, "application/fits": { source: "iana" }, "application/flexfec": { source: "iana" }, "application/font-sfnt": { source: "iana" }, "application/font-tdpfr": { source: "iana", extensions: ["pfr"] }, "application/font-woff": { source: "iana", compressible: false }, "application/framework-attributes+xml": { source: "iana", compressible: true }, "application/geo+json": { source: "iana", compressible: true, extensions: ["geojson"] }, "application/geo+json-seq": { source: "iana" }, "application/geopackage+sqlite3": { source: "iana" }, "application/geoxacml+xml": { source: "iana", compressible: true }, "application/gltf-buffer": { source: "iana" }, "application/gml+xml": { source: "iana", compressible: true, extensions: ["gml"] }, "application/gpx+xml": { source: "apache", compressible: true, extensions: ["gpx"] }, "application/gxf": { source: "apache", extensions: ["gxf"] }, "application/gzip": { source: "iana", compressible: false, extensions: ["gz"] }, "application/h224": { source: "iana" }, "application/held+xml": { source: "iana", compressible: true }, "application/hjson": { extensions: ["hjson"] }, "application/http": { source: "iana" }, "application/hyperstudio": { source: "iana", extensions: ["stk"] }, "application/ibe-key-request+xml": { source: "iana", compressible: true }, "application/ibe-pkg-reply+xml": { source: "iana", compressible: true }, "application/ibe-pp-data": { source: "iana" }, "application/iges": { source: "iana" }, "application/im-iscomposing+xml": { source: "iana", charset: "UTF-8", compressible: true }, "application/index": { source: "iana" }, "application/index.cmd": { source: "iana" }, "application/index.obj": { source: "iana" }, "application/index.response": { source: "iana" }, "application/index.vnd": { source: "iana" }, "application/inkml+xml": { source: "iana", compressible: true, extensions: ["ink", "inkml"] }, "application/iotp": { source: "iana" }, "application/ipfix": { source: "iana", extensions: ["ipfix"] }, "application/ipp": { source: "iana" }, "application/isup": { source: "iana" }, "application/its+xml": { source: "iana", compressible: true, extensions: ["its"] }, "application/java-archive": { source: "apache", compressible: false, extensions: ["jar", "war", "ear"] }, "application/java-serialized-object": { source: "apache", compressible: false, extensions: ["ser"] }, "application/java-vm": { source: "apache", compressible: false, extensions: ["class"] }, "application/javascript": { source: "iana", charset: "UTF-8", compressible: true, extensions: ["js", "mjs"] }, "application/jf2feed+json": { source: "iana", compressible: true }, "application/jose": { source: "iana" }, "application/jose+json": { source: "iana", compressible: true }, "application/jrd+json": { source: "iana", compressible: true }, "application/jscalendar+json": { source: "iana", compressible: true }, "application/json": { source: "iana", charset: "UTF-8", compressible: true, extensions: ["json", "map"] }, "application/json-patch+json": { source: "iana", compressible: true }, "application/json-seq": { source: "iana" }, "application/json5": { extensions: ["json5"] }, "application/jsonml+json": { source: "apache", compressible: true, extensions: ["jsonml"] }, "application/jwk+json": { source: "iana", compressible: true }, "application/jwk-set+json": { source: "iana", compressible: true }, "application/jwt": { source: "iana" }, "application/kpml-request+xml": { source: "iana", compressible: true }, "application/kpml-response+xml": { source: "iana", compressible: true }, "application/ld+json": { source: "iana", compressible: true, extensions: ["jsonld"] }, "application/lgr+xml": { source: "iana", compressible: true, extensions: ["lgr"] }, "application/link-format": { source: "iana" }, "application/load-control+xml": { source: "iana", compressible: true }, "application/lost+xml": { source: "iana", compressible: true, extensions: ["lostxml"] }, "application/lostsync+xml": { source: "iana", compressible: true }, "application/lpf+zip": { source: "iana", compressible: false }, "application/lxf": { source: "iana" }, "application/mac-binhex40": { source: "iana", extensions: ["hqx"] }, "application/mac-compactpro": { source: "apache", extensions: ["cpt"] }, "application/macwriteii": { source: "iana" }, "application/mads+xml": { source: "iana", compressible: true, extensions: ["mads"] }, "application/manifest+json": { source: "iana", charset: "UTF-8", compressible: true, extensions: ["webmanifest"] }, "application/marc": { source: "iana", extensions: ["mrc"] }, "application/marcxml+xml": { source: "iana", compressible: true, extensions: ["mrcx"] }, "application/mathematica": { source: "iana", extensions: ["ma", "nb", "mb"] }, "application/mathml+xml": { source: "iana", compressible: true, extensions: ["mathml"] }, "application/mathml-content+xml": { source: "iana", compressible: true }, "application/mathml-presentation+xml": { source: "iana", compressible: true }, "application/mbms-associated-procedure-description+xml": { source: "iana", compressible: true }, "application/mbms-deregister+xml": { source: "iana", compressible: true }, "application/mbms-envelope+xml": { source: "iana", compressible: true }, "application/mbms-msk+xml": { source: "iana", compressible: true }, "application/mbms-msk-response+xml": { source: "iana", compressible: true }, "application/mbms-protection-description+xml": { source: "iana", compressible: true }, "application/mbms-reception-report+xml": { source: "iana", compressible: true }, "application/mbms-register+xml": { source: "iana", compressible: true }, "application/mbms-register-response+xml": { source: "iana", compressible: true }, "application/mbms-schedule+xml": { source: "iana", compressible: true }, "application/mbms-user-service-description+xml": { source: "iana", compressible: true }, "application/mbox": { source: "iana", extensions: ["mbox"] }, "application/media-policy-dataset+xml": { source: "iana", compressible: true, extensions: ["mpf"] }, "application/media_control+xml": { source: "iana", compressible: true }, "application/mediaservercontrol+xml": { source: "iana", compressible: true, extensions: ["mscml"] }, "application/merge-patch+json": { source: "iana", compressible: true }, "application/metalink+xml": { source: "apache", compressible: true, extensions: ["metalink"] }, "application/metalink4+xml": { source: "iana", compressible: true, extensions: ["meta4"] }, "application/mets+xml": { source: "iana", compressible: true, extensions: ["mets"] }, "application/mf4": { source: "iana" }, "application/mikey": { source: "iana" }, "application/mipc": { source: "iana" }, "application/missing-blocks+cbor-seq": { source: "iana" }, "application/mmt-aei+xml": { source: "iana", compressible: true, extensions: ["maei"] }, "application/mmt-usd+xml": { source: "iana", compressible: true, extensions: ["musd"] }, "application/mods+xml": { source: "iana", compressible: true, extensions: ["mods"] }, "application/moss-keys": { source: "iana" }, "application/moss-signature": { source: "iana" }, "application/mosskey-data": { source: "iana" }, "application/mosskey-request": { source: "iana" }, "application/mp21": { source: "iana", extensions: ["m21", "mp21"] }, "application/mp4": { source: "iana", extensions: ["mp4s", "m4p"] }, "application/mpeg4-generic": { source: "iana" }, "application/mpeg4-iod": { source: "iana" }, "application/mpeg4-iod-xmt": { source: "iana" }, "application/mrb-consumer+xml": { source: "iana", compressible: true }, "application/mrb-publish+xml": { source: "iana", compressible: true }, "application/msc-ivr+xml": { source: "iana", charset: "UTF-8", compressible: true }, "application/msc-mixer+xml": { source: "iana", charset: "UTF-8", compressible: true }, "application/msword": { source: "iana", compressible: false, extensions: ["doc", "dot"] }, "application/mud+json": { source: "iana", compressible: true }, "application/multipart-core": { source: "iana" }, "application/mxf": { source: "iana", extensions: ["mxf"] }, "application/n-quads": { source: "iana", extensions: ["nq"] }, "application/n-triples": { source: "iana", extensions: ["nt"] }, "application/nasdata": { source: "iana" }, "application/news-checkgroups": { source: "iana", charset: "US-ASCII" }, "application/news-groupinfo": { source: "iana", charset: "US-ASCII" }, "application/news-transmission": { source: "iana" }, "application/nlsml+xml": { source: "iana", compressible: true }, "application/node": { source: "iana", extensions: ["cjs"] }, "application/nss": { source: "iana" }, "application/oauth-authz-req+jwt": { source: "iana" }, "application/oblivious-dns-message": { source: "iana" }, "application/ocsp-request": { source: "iana" }, "application/ocsp-response": { source: "iana" }, "application/octet-stream": { source: "iana", compressible: false, extensions: ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"] }, "application/oda": { source: "iana", extensions: ["oda"] }, "application/odm+xml": { source: "iana", compressible: true }, "application/odx": { source: "iana" }, "application/oebps-package+xml": { source: "iana", compressible: true, extensions: ["opf"] }, "application/ogg": { source: "iana", compressible: false, extensions: ["ogx"] }, "application/omdoc+xml": { source: "apache", compressible: true, extensions: ["omdoc"] }, "application/onenote": { source: "apache", extensions: ["onetoc", "onetoc2", "onetmp", "onepkg"] }, "application/opc-nodeset+xml": { source: "iana", compressible: true }, "application/oscore": { source: "iana" }, "application/oxps": { source: "iana", extensions: ["oxps"] }, "application/p21": { source: "iana" }, "application/p21+zip": { source: "iana", compressible: false }, "application/p2p-overlay+xml": { source: "iana", compressible: true, extensions: ["relo"] }, "application/parityfec": { source: "iana" }, "application/passport": { source: "iana" }, "application/patch-ops-error+xml": { source: "iana", compressible: true, extensions: ["xer"] }, "application/pdf": { source: "iana", compressible: false, extensions: ["pdf"] }, "application/pdx": { source: "iana" }, "application/pem-certificate-chain": { source: "iana" }, "application/pgp-encrypted": { source: "iana", compressible: false, extensions: ["pgp"] }, "application/pgp-keys": { source: "iana", extensions: ["asc"] }, "application/pgp-signature": { source: "iana", extensions: ["asc", "sig"] }, "application/pics-rules": { source: "apache", extensions: ["prf"] }, "application/pidf+xml": { source: "iana", charset: "UTF-8", compressible: true }, "application/pidf-diff+xml": { source: "iana", charset: "UTF-8", compressible: true }, "application/pkcs10": { source: "iana", extensions: ["p10"] }, "application/pkcs12": { source: "iana" }, "application/pkcs7-mime": { source: "iana", extensions: ["p7m", "p7c"] }, "application/pkcs7-signature": { source: "iana", extensions: ["p7s"] }, "application/pkcs8": { source: "iana", extensions: ["p8"] }, "application/pkcs8-encrypted": { source: "iana" }, "application/pkix-attr-cert": { source: "iana", extensions: ["ac"] }, "application/pkix-cert": { source: "iana", extensions: ["cer"] }, "application/pkix-crl": { source: "iana", extensions: ["crl"] }, "application/pkix-pkipath": { source: "iana", extensions: ["pkipath"] }, "application/pkixcmp": { source: "iana", extensions: ["pki"] }, "application/pls+xml": { source: "iana", compressible: true, extensions: ["pls"] }, "application/poc-settings+xml": { source: "iana", charset: "UTF-8", compressible: true }, "application/postscript": { source: "iana", compressible: true, extensions: ["ai", "eps", "ps"] }, "application/ppsp-tracker+json": { source: "iana", compressible: true }, "application/problem+json": { source: "iana", compressible: true }, "application/problem+xml": { source: "iana", compressible: true }, "application/provenance+xml": { source: "iana", compressible: true, extensions: ["provx"] }, "application/prs.alvestrand.titrax-sheet": { source: "iana" }, "application/prs.cww": { source: "iana", extensions: ["cww"] }, "application/prs.cyn": { source: "iana", charset: "7-BIT" }, "application/prs.hpub+zip": { source: "iana", compressible: false }, "application/prs.nprend": { source: "iana" }, "application/prs.plucker": { source: "iana" }, "application/prs.rdf-xml-crypt": { source: "iana" }, "application/prs.xsf+xml": { source: "iana", compressible: true }, "application/pskc+xml": { source: "iana", compressible: true, extensions: ["pskcxml"] }, "application/pvd+json": { source: "iana", compressible: true }, "application/qsig": { source: "iana" }, "application/raml+yaml": { compressible: true, extensions: ["raml"] }, "application/raptorfec": { source: "iana" }, "application/rdap+json": { source: "iana", compressible: true }, "application/rdf+xml": { source: "iana", compressible: true, extensions: ["rdf", "owl"] }, "application/reginfo+xml": { source: "iana", compressible: true, extensions: ["rif"] }, "application/relax-ng-compact-syntax": { source: "iana", extensions: ["rnc"] }, "application/remote-printing": { source: "iana" }, "application/reputon+json": { source: "iana", compressible: true }, "application/resource-lists+xml": { source: "iana", compressible: true, extensions: ["rl"] }, "application/resource-lists-diff+xml": { source: "iana", compressible: true, extensions: ["rld"] }, "application/rfc+xml": { source: "iana", compressible: true }, "application/riscos": { source: "iana" }, "application/rlmi+xml": { source: "iana", compressible: true }, "application/rls-services+xml": { source: "iana", compressible: true, extensions: ["rs"] }, "application/route-apd+xml": { source: "iana", compressible: true, extensions: ["rapd"] }, "application/route-s-tsid+xml": { source: "iana", compressible: true, extensions: ["sls"] }, "application/route-usd+xml": { source: "iana", compressible: true, extensions: ["rusd"] }, "application/rpki-ghostbusters": { source: "iana", extensions: ["gbr"] }, "application/rpki-manifest": { source: "iana", extensions: ["mft"] }, "application/rpki-publication": { source: "iana" }, "application/rpki-roa": { source: "iana", extensions: ["roa"] }, "application/rpki-updown": { source: "iana" }, "application/rsd+xml": { source: "apache", compressible: true, extensions: ["rsd"] }, "application/rss+xml": { source: "apache", compressible: true, extensions: ["rss"] }, "application/rtf": { source: "iana", compressible: true, extensions: ["rtf"] }, "application/rtploopback": { source: "iana" }, "application/rtx": { source: "iana" }, "application/samlassertion+xml": { source: "iana", compressible: true }, "application/samlmetadata+xml": { source: "iana", compressible: true }, "application/sarif+json": { source: "iana", compressible: true }, "application/sarif-external-properties+json": { source: "iana", compressible: true }, "application/sbe": { source: "iana" }, "application/sbml+xml": { source: "iana", compressible: true, extensions: ["sbml"] }, "application/scaip+xml": { source: "iana", compressible: true }, "application/scim+json": { source: "iana", compressible: true }, "application/scvp-cv-request": { source: "iana", extensions: ["scq"] }, "application/scvp-cv-response": { source: "iana", extensions: ["scs"] }, "application/scvp-vp-request": { source: "iana", extensions: ["spq"] }, "application/scvp-vp-response": { source: "iana", extensions: ["spp"] }, "application/sdp": { source: "iana", extensions: ["sdp"] }, "application/secevent+jwt": { source: "iana" }, "application/senml+cbor": { source: "iana" }, "application/senml+json": { source: "iana", compressible: true }, "application/senml+xml": { source: "iana", compressible: true, extensions: ["senmlx"] }, "application/senml-etch+cbor": { source: "iana" }, "application/senml-etch+json": { source: "iana", compressible: true }, "application/senml-exi": { source: "iana" }, "application/sensml+cbor": { source: "iana" }, "application/sensml+json": { source: "iana", compressible: true }, "application/sensml+xml": { source: "iana", compressible: true, extensions: ["sensmlx"] }, "application/sensml-exi": { source: "iana" }, "application/sep+xml": { source: "iana", compressible: true }, "application/sep-exi": { source: "iana" }, "application/session-info": { source: "iana" }, "application/set-payment": { source: "iana" }, "application/set-payment-initiation": { source: "iana", extensions: ["setpay"] }, "application/set-registration": { source: "iana" }, "application/set-registration-initiation": { source: "iana", extensions: ["setreg"] }, "application/sgml": { source: "iana" }, "application/sgml-open-catalog": { source: "iana" }, "application/shf+xml": { source: "iana", compressible: true, extensions: ["shf"] }, "application/sieve": { source: "iana", extensions: ["siv", "sieve"] }, "application/simple-filter+xml": { source: "iana", compressible: true }, "application/simple-message-summary": { source: "iana" }, "application/simplesymbolcontainer": { source: "iana" }, "application/sipc": { source: "iana" }, "application/slate": { source: "iana" }, "application/smil": { source: "iana" }, "application/smil+xml": { source: "iana", compressible: true, extensions: ["smi", "smil"] }, "application/smpte336m": { source: "iana" }, "application/soap+fastinfoset": { source: "iana" }, "application/soap+xml": { source: "iana", compressible: true }, "application/sparql-query": { source: "iana", extensions: ["rq"] }, "application/sparql-results+xml": { source: "iana", compressible: true, extensions: ["srx"] }, "application/spdx+json": { source: "iana", compressible: true }, "application/spirits-event+xml": { source: "iana", compressible: true }, "application/sql": { source: "iana" }, "application/srgs": { source: "iana", extensions: ["gram"] }, "application/srgs+xml": { source: "iana", compressible: true, extensions: ["grxml"] }, "application/sru+xml": { source: "iana", compressible: true, extensions: ["sru"] }, "application/ssdl+xml": { source: "apache", compressible: true, extensions: ["ssdl"] }, "application/ssml+xml": { source: "iana", compressible: true, extensions: ["ssml"] }, "application/stix+json": { source: "iana", compressible: true }, "application/swid+xml": { source: "iana", compressible: true, extensions: ["swidtag"] }, "application/tamp-apex-update": { source: "iana" }, "application/tamp-apex-update-confirm": { source: "iana" }, "application/tamp-community-update": { source: "iana" }, "application/tamp-community-update-confirm": { source: "iana" }, "application/tamp-error": { source: "iana" }, "application/tamp-sequence-adjust": { source: "iana" }, "application/tamp-sequence-adjust-confirm": { source: "iana" }, "application/tamp-status-query": { source: "iana" }, "application/tamp-status-response": { source: "iana" }, "application/tamp-update": { source: "iana" }, "application/tamp-update-confirm": { source: "iana" }, "application/tar": { compressible: true }, "application/taxii+json": { source: "iana", compressible: true }, "application/td+json": { source: "iana", compressible: true }, "application/tei+xml": { source: "iana", compressible: true, extensions: ["tei", "teicorpus"] }, "application/tetra_isi": { source: "iana" }, "application/thraud+xml": { source: "iana", compressible: true, extensions: ["tfi"] }, "application/timestamp-query": { source: "iana" }, "application/timestamp-reply": { source: "iana" }, "application/timestamped-data": { source: "iana", extensions: ["tsd"] }, "application/tlsrpt+gzip": { source: "iana" }, "application/tlsrpt+json": { source: "iana", compressible: true }, "application/tnauthlist": { source: "iana" }, "application/token-introspection+jwt": { source: "iana" }, "application/toml": { compressible: true, extensions: ["toml"] }, "application/trickle-ice-sdpfrag": { source: "iana" }, "application/trig": { source: "iana", extensions: ["trig"] }, "application/ttml+xml": { source: "iana", compressible: true, extensions: ["ttml"] }, "application/tve-trigger": { source: "iana" }, "application/tzif": { source: "iana" }, "application/tzif-leap": { source: "iana" }, "application/ubjson": { compressible: false, extensions: ["ubj"] }, "application/ulpfec": { source: "iana" }, "application/urc-grpsheet+xml": { source: "iana", compressible: true }, "application/urc-ressheet+xml": { source: "iana", compressible: true, extensions: ["rsheet"] }, "application/urc-targetdesc+xml": { source: "iana", compressible: true, extensions: ["td"] }, "application/urc-uisocketdesc+xml": { source: "iana", compressible: true }, "application/vcard+json": { source: "iana", compressible: true }, "application/vcard+xml": { source: "iana", compressible: true }, "application/vemmi": { source: "iana" }, "application/vividence.scriptfile": { source: "apache" }, "application/vnd.1000minds.decision-model+xml": { source: "iana", compressible: true, extensions: ["1km"] }, "application/vnd.3gpp-prose+xml": { source: "iana", compressible: true }, "application/vnd.3gpp-prose-pc3ch+xml": { source: "iana", compressible: true }, "application/vnd.3gpp-v2x-local-service-information": { source: "iana" }, "application/vnd.3gpp.5gnas": { source: "iana" }, "application/vnd.3gpp.access-transfer-events+xml": { source: "iana", compressible: true }, "application/vnd.3gpp.bsf+xml": { source: "iana", compressible: true }, "application/vnd.3gpp.gmop+xml": { source: "iana", compressible: true }, "application/vnd.3gpp.gtpc": { source: "iana" }, "application/vnd.3gpp.interworking-data": { source: "iana" }, "application/vnd.3gpp.lpp": { source: "iana" }, "application/vnd.3gpp.mc-signalling-ear": { source: "iana" }, "application/vnd.3gpp.mcdata-affiliation-command+xml": { source: "iana", compressible: true }, "application/vnd.3gpp.mcdata-info+xml": { source: "iana", compressible: true }, "application/vnd.3gpp.mcdata-payload": { source: "iana" }, "application/vnd.3gpp.mcdata-service-config+xml": { source: "iana", compressible: true }, "application/vnd.3gpp.mcdata-signalling": { source: "iana" }, "application/vnd.3gpp.mcdata-ue-config+xml": { source: "iana", compressible: true }, "application/vnd.3gpp.mcdata-user-profile+xml": { source: "iana", compressible: true }, "application/vnd.3gpp.mcptt-affiliation-command+xml": { source: "iana", compressible: true }, "application/vnd.3gpp.mcptt-floor-request+xml": { source: "iana", compressible: true }, "application/vnd.3gpp.mcptt-info+xml": { source: "iana", compressible: true }, "application/vnd.3gpp.mcptt-location-info+xml": { source: "iana", compressible: true }, "application/vnd.3gpp.mcptt-mbms-usage-info+xml": { source: "iana", compressible: true }, "application/vnd.3gpp.mcptt-service-config+xml": { source: "iana", compressible: true }, "application/vnd.3gpp.mcptt-signed+xml": { source: "iana", compressible: true }, "application/vnd.3gpp.mcptt-ue-config+xml": { source: "iana", compressible: true }, "application/vnd.3gpp.mcptt-ue-init-config+xml": { source: "iana", compressible: true }, "application/vnd.3gpp.mcptt-user-profile+xml": { source: "iana", compressible: true }, "application/vnd.3gpp.mcvideo-affiliation-command+xml": { source: "iana", compressible: true }, "application/vnd.3gpp.mcvideo-affiliation-info+xml": { source: "iana", compressible: true }, "application/vnd.3gpp.mcvideo-info+xml": { source: "iana", compressible: true }, "application/vnd.3gpp.mcvideo-location-info+xml": { source: "iana", compressible: true }, "application/vnd.3gpp.mcvideo-mbms-usage-info+xml": { source: "iana", compressible: true }, "application/vnd.3gpp.mcvideo-service-config+xml": { source: "iana", compressible: true }, "application/vnd.3gpp.mcvideo-transmission-request+xml": { source: "iana", compressible: true }, "application/vnd.3gpp.mcvideo-ue-config+xml": { source: "iana", compressible: true }, "application/vnd.3gpp.mcvideo-user-profile+xml": { source: "iana", compressible: true }, "application/vnd.3gpp.mid-call+xml": { source: "iana", compressible: true }, "application/vnd.3gpp.ngap": { source: "iana" }, "application/vnd.3gpp.pfcp": { source: "iana" }, "application/vnd.3gpp.pic-bw-large": { source: "iana", extensions: ["plb"] }, "application/vnd.3gpp.pic-bw-small": { source: "iana", extensions: ["psb"] }, "application/vnd.3gpp.pic-bw-var": { source: "iana", extensions: ["pvb"] }, "application/vnd.3gpp.s1ap": { source: "iana" }, "application/vnd.3gpp.sms": { source: "iana" }, "application/vnd.3gpp.sms+xml": { source: "iana", compressible: true }, "application/vnd.3gpp.srvcc-ext+xml": { source: "iana", compressible: true }, "application/vnd.3gpp.srvcc-info+xml": { source: "iana", compressible: true }, "application/vnd.3gpp.state-and-event-info+xml": { source: "iana", compressible: true }, "application/vnd.3gpp.ussd+xml": { source: "iana", compressible: true }, "application/vnd.3gpp2.bcmcsinfo+xml": { source: "iana", compressible: true }, "application/vnd.3gpp2.sms": { source: "iana" }, "application/vnd.3gpp2.tcap": { source: "iana", extensions: ["tcap"] }, "application/vnd.3lightssoftware.imagescal": { source: "iana" }, "application/vnd.3m.post-it-notes": { source: "iana", extensions: ["pwn"] }, "application/vnd.accpac.simply.aso": { source: "iana", extensions: ["aso"] }, "application/vnd.accpac.simply.imp": { source: "iana", extensions: ["imp"] }, "application/vnd.acucobol": { source: "iana", extensions: ["acu"] }, "application/vnd.acucorp": { source: "iana", extensions: ["atc", "acutc"] }, "application/vnd.adobe.air-application-installer-package+zip": { source: "apache", compressible: false, extensions: ["air"] }, "application/vnd.adobe.flash.movie": { source: "iana" }, "application/vnd.adobe.formscentral.fcdt": { source: "iana", extensions: ["fcdt"] }, "application/vnd.adobe.fxp": { source: "iana", extensions: ["fxp", "fxpl"] }, "application/vnd.adobe.partial-upload": { source: "iana" }, "application/vnd.adobe.xdp+xml": { source: "iana", compressible: true, extensions: ["xdp"] }, "application/vnd.adobe.xfdf": { source: "iana", extensions: ["xfdf"] }, "application/vnd.aether.imp": { source: "iana" }, "application/vnd.afpc.afplinedata": { source: "iana" }, "application/vnd.afpc.afplinedata-pagedef": { source: "iana" }, "application/vnd.afpc.cmoca-cmresource": { source: "iana" }, "application/vnd.afpc.foca-charset": { source: "iana" }, "application/vnd.afpc.foca-codedfont": { source: "iana" }, "application/vnd.afpc.foca-codepage": { source: "iana" }, "application/vnd.afpc.modca": { source: "iana" }, "application/vnd.afpc.modca-cmtable": { source: "iana" }, "application/vnd.afpc.modca-formdef": { source: "iana" }, "application/vnd.afpc.modca-mediummap": { source: "iana" }, "application/vnd.afpc.modca-objectcontainer": { source: "iana" }, "application/vnd.afpc.modca-overlay": { source: "iana" }, "application/vnd.afpc.modca-pagesegment": { source: "iana" }, "application/vnd.age": { source: "iana", extensions: ["age"] }, "application/vnd.ah-barcode": { source: "iana" }, "application/vnd.ahead.space": { source: "iana", extensions: ["ahead"] }, "application/vnd.airzip.filesecure.azf": { source: "iana", extensions: ["azf"] }, "application/vnd.airzip.filesecure.azs": { source: "iana", extensions: ["azs"] }, "application/vnd.amadeus+json": { source: "iana", compressible: true }, "application/vnd.amazon.ebook": { source: "apache", extensions: ["azw"] }, "application/vnd.amazon.mobi8-ebook": { source: "iana" }, "application/vnd.americandynamics.acc": { source: "iana", extensions: ["acc"] }, "application/vnd.amiga.ami": { source: "iana", extensions: ["ami"] }, "application/vnd.amundsen.maze+xml": { source: "iana", compressible: true }, "application/vnd.android.ota": { source: "iana" }, "application/vnd.android.package-archive": { source: "apache", compressible: false, extensions: ["apk"] }, "application/vnd.anki": { source: "iana" }, "application/vnd.anser-web-certificate-issue-initiation": { source: "iana", extensions: ["cii"] }, "application/vnd.anser-web-funds-transfer-initiation": { source: "apache", extensions: ["fti"] }, "application/vnd.antix.game-component": { source: "iana", extensions: ["atx"] }, "application/vnd.apache.arrow.file": { source: "iana" }, "application/vnd.apache.arrow.stream": { source: "iana" }, "application/vnd.apache.thrift.binary": { source: "iana" }, "application/vnd.apache.thrift.compact": { source: "iana" }, "application/vnd.apache.thrift.json": { source: "iana" }, "application/vnd.api+json": { source: "iana", compressible: true }, "application/vnd.aplextor.warrp+json": { source: "iana", compressible: true }, "application/vnd.apothekende.reservation+json": { source: "iana", compressible: true }, "application/vnd.apple.installer+xml": { source: "iana", compressible: true, extensions: ["mpkg"] }, "application/vnd.apple.keynote": { source: "iana", extensions: ["key"] }, "application/vnd.apple.mpegurl": { source: "iana", extensions: ["m3u8"] }, "application/vnd.apple.numbers": { source: "iana", extensions: ["numbers"] }, "application/vnd.apple.pages": { source: "iana", extensions: ["pages"] }, "application/vnd.apple.pkpass": { compressible: false, extensions: ["pkpass"] }, "application/vnd.arastra.swi": { source: "iana" }, "application/vnd.aristanetworks.swi": { source: "iana", extensions: ["swi"] }, "application/vnd.artisan+json": { source: "iana", compressible: true }, "application/vnd.artsquare": { source: "iana" }, "application/vnd.astraea-software.iota": { source: "iana", extensions: ["iota"] }, "application/vnd.audiograph": { source: "iana", extensions: ["aep"] }, "application/vnd.autopackage": { source: "iana" }, "application/vnd.avalon+json": { source: "iana", compressible: true }, "application/vnd.avistar+xml": { source: "iana", compressible: true }, "application/vnd.balsamiq.bmml+xml": { source: "iana", compressible: true, extensions: ["bmml"] }, "application/vnd.balsamiq.bmpr": { source: "iana" }, "application/vnd.banana-accounting": { source: "iana" }, "application/vnd.bbf.usp.error": { source: "iana" }, "application/vnd.bbf.usp.msg": { source: "iana" }, "application/vnd.bbf.usp.msg+json": { source: "iana", compressible: true }, "application/vnd.bekitzur-stech+json": { source: "iana", compressible: true }, "application/vnd.bint.med-content": { source: "iana" }, "application/vnd.biopax.rdf+xml": { source: "iana", compressible: true }, "application/vnd.blink-idb-value-wrapper": { source: "iana" }, "application/vnd.blueice.multipass": { source: "iana", extensions: ["mpm"] }, "application/vnd.bluetooth.ep.oob": { source: "iana" }, "application/vnd.bluetooth.le.oob": { source: "iana" }, "application/vnd.bmi": { source: "iana", extensions: ["bmi"] }, "application/vnd.bpf": { source: "iana" }, "application/vnd.bpf3": { source: "iana" }, "application/vnd.businessobjects": { source: "iana", extensions: ["rep"] }, "application/vnd.byu.uapi+json": { source: "iana", compressible: true }, "application/vnd.cab-jscript": { source: "iana" }, "application/vnd.canon-cpdl": { source: "iana" }, "application/vnd.canon-lips": { source: "iana" }, "application/vnd.capasystems-pg+json": { source: "iana", compressible: true }, "application/vnd.cendio.thinlinc.clientconf": { source: "iana" }, "application/vnd.century-systems.tcp_stream": { source: "iana" }, "application/vnd.chemdraw+xml": { source: "iana", compressible: true, extensions: ["cdxml"] }, "application/vnd.chess-pgn": { source: "iana" }, "application/vnd.chipnuts.karaoke-mmd": { source: "iana", extensions: ["mmd"] }, "application/vnd.ciedi": { source: "iana" }, "application/vnd.cinderella": { source: "iana", extensions: ["cdy"] }, "application/vnd.cirpack.isdn-ext": { source: "iana" }, "application/vnd.citationstyles.style+xml": { source: "iana", compressible: true, extensions: ["csl"] }, "application/vnd.claymore": { source: "iana", extensions: ["cla"] }, "application/vnd.cloanto.rp9": { source: "iana", extensions: ["rp9"] }, "application/vnd.clonk.c4group": { source: "iana", extensions: ["c4g", "c4d", "c4f", "c4p", "c4u"] }, "application/vnd.cluetrust.cartomobile-config": { source: "iana", extensions: ["c11amc"] }, "application/vnd.cluetrust.cartomobile-config-pkg": { source: "iana", extensions: ["c11amz"] }, "application/vnd.coffeescript": { source: "iana" }, "application/vnd.collabio.xodocuments.document": { source: "iana" }, "application/vnd.collabio.xodocuments.document-template": { source: "iana" }, "application/vnd.collabio.xodocuments.presentation": { source: "iana" }, "application/vnd.collabio.xodocuments.presentation-template": { source: "iana" }, "application/vnd.collabio.xodocuments.spreadsheet": { source: "iana" }, "application/vnd.collabio.xodocuments.spreadsheet-template": { source: "iana" }, "application/vnd.collection+json": { source: "iana", compressible: true }, "application/vnd.collection.doc+json": { source: "iana", compressible: true }, "application/vnd.collection.next+json": { source: "iana", compressible: true }, "application/vnd.comicbook+zip": { source: "iana", compressible: false }, "application/vnd.comicbook-rar": { source: "iana" }, "application/vnd.commerce-battelle": { source: "iana" }, "application/vnd.commonspace": { source: "iana", extensions: ["csp"] }, "application/vnd.contact.cmsg": { source: "iana", extensions: ["cdbcmsg"] }, "application/vnd.coreos.ignition+json": { source: "iana", compressible: true }, "application/vnd.cosmocaller": { source: "iana", extensions: ["cmc"] }, "application/vnd.crick.clicker": { source: "iana", extensions: ["clkx"] }, "application/vnd.crick.clicker.keyboard": { source: "iana", extensions: ["clkk"] }, "application/vnd.crick.clicker.palette": { source: "iana", extensions: ["clkp"] }, "application/vnd.crick.clicker.template": { source: "iana", extensions: ["clkt"] }, "application/vnd.crick.clicker.wordbank": { source: "iana", extensions: ["clkw"] }, "application/vnd.criticaltools.wbs+xml": { source: "iana", compressible: true, extensions: ["wbs"] }, "application/vnd.cryptii.pipe+json": { source: "iana", compressible: true }, "application/vnd.crypto-shade-file": { source: "iana" }, "application/vnd.cryptomator.encrypted": { source: "iana" }, "application/vnd.cryptomator.vault": { source: "iana" }, "application/vnd.ctc-posml": { source: "iana", extensions: ["pml"] }, "application/vnd.ctct.ws+xml": { source: "iana", compressible: true }, "application/vnd.cups-pdf": { source: "iana" }, "application/vnd.cups-postscript": { source: "iana" }, "application/vnd.cups-ppd": { source: "iana", extensions: ["ppd"] }, "application/vnd.cups-raster": { source: "iana" }, "application/vnd.cups-raw": { source: "iana" }, "application/vnd.curl": { source: "iana" }, "application/vnd.curl.car": { source: "apache", extensions: ["car"] }, "application/vnd.curl.pcurl": { source: "apache", extensions: ["pcurl"] }, "application/vnd.cyan.dean.root+xml": { source: "iana", compressible: true }, "application/vnd.cybank": { source: "iana" }, "application/vnd.cyclonedx+json": { source: "iana", compressible: true }, "application/vnd.cyclonedx+xml": { source: "iana", compressible: true }, "application/vnd.d2l.coursepackage1p0+zip": { source: "iana", compressible: false }, "application/vnd.d3m-dataset": { source: "iana" }, "application/vnd.d3m-problem": { source: "iana" }, "application/vnd.dart": { source: "iana", compressible: true, extensions: ["dart"] }, "application/vnd.data-vision.rdz": { source: "iana", extensions: ["rdz"] }, "application/vnd.datapackage+json": { source: "iana", compressible: true }, "application/vnd.dataresource+json": { source: "iana", compressible: true }, "application/vnd.dbf": { source: "iana", extensions: ["dbf"] }, "application/vnd.debian.binary-package": { source: "iana" }, "application/vnd.dece.data": { source: "iana", extensions: ["uvf", "uvvf", "uvd", "uvvd"] }, "application/vnd.dece.ttml+xml": { source: "iana", compressible: true, extensions: ["uvt", "uvvt"] }, "application/vnd.dece.unspecified": { source: "iana", extensions: ["uvx", "uvvx"] }, "application/vnd.dece.zip": { source: "iana", extensions: ["uvz", "uvvz"] }, "application/vnd.denovo.fcselayout-link": { source: "iana", extensions: ["fe_launch"] }, "application/vnd.desmume.movie": { source: "iana" }, "application/vnd.dir-bi.plate-dl-nosuffix": { source: "iana" }, "application/vnd.dm.delegation+xml": { source: "iana", compressible: true }, "application/vnd.dna": { source: "iana", extensions: ["dna"] }, "application/vnd.document+json": { source: "iana", compressible: true }, "application/vnd.dolby.mlp": { source: "apache", extensions: ["mlp"] }, "application/vnd.dolby.mobile.1": { source: "iana" }, "application/vnd.dolby.mobile.2": { source: "iana" }, "application/vnd.doremir.scorecloud-binary-document": { source: "iana" }, "application/vnd.dpgraph": { source: "iana", extensions: ["dpg"] }, "application/vnd.dreamfactory": { source: "iana", extensions: ["dfac"] }, "application/vnd.drive+json": { source: "iana", compressible: true }, "application/vnd.ds-keypoint": { source: "apache", extensions: ["kpxx"] }, "application/vnd.dtg.local": { source: "iana" }, "application/vnd.dtg.local.flash": { source: "iana" }, "application/vnd.dtg.local.html": { source: "iana" }, "application/vnd.dvb.ait": { source: "iana", extensions: ["ait"] }, "application/vnd.dvb.dvbisl+xml": { source: "iana", compressible: true }, "application/vnd.dvb.dvbj": { source: "iana" }, "application/vnd.dvb.esgcontainer": { source: "iana" }, "application/vnd.dvb.ipdcdftnotifaccess": { source: "iana" }, "application/vnd.dvb.ipdcesgaccess": { source: "iana" }, "application/vnd.dvb.ipdcesgaccess2": { source: "iana" }, "application/vnd.dvb.ipdcesgpdd": { source: "iana" }, "application/vnd.dvb.ipdcroaming": { source: "iana" }, "application/vnd.dvb.iptv.alfec-base": { source: "iana" }, "application/vnd.dvb.iptv.alfec-enhancement": { source: "iana" }, "application/vnd.dvb.notif-aggregate-root+xml": { source: "iana", compressible: true }, "application/vnd.dvb.notif-container+xml": { source: "iana", compressible: true }, "application/vnd.dvb.notif-generic+xml": { source: "iana", compressible: true }, "application/vnd.dvb.notif-ia-msglist+xml": { source: "iana", compressible: true }, "application/vnd.dvb.notif-ia-registration-request+xml": { source: "iana", compressible: true }, "application/vnd.dvb.notif-ia-registration-response+xml": { source: "iana", compressible: true }, "application/vnd.dvb.notif-init+xml": { source: "iana", compressible: true }, "application/vnd.dvb.pfr": { source: "iana" }, "application/vnd.dvb.service": { source: "iana", extensions: ["svc"] }, "application/vnd.dxr": { source: "iana" }, "application/vnd.dynageo": { source: "iana", extensions: ["geo"] }, "application/vnd.dzr": { source: "iana" }, "application/vnd.easykaraoke.cdgdownload": { source: "iana" }, "application/vnd.ecdis-update": { source: "iana" }, "application/vnd.ecip.rlp": { source: "iana" }, "application/vnd.eclipse.ditto+json": { source: "iana", compressible: true }, "application/vnd.ecowin.chart": { source: "iana", extensions: ["mag"] }, "application/vnd.ecowin.filerequest": { source: "iana" }, "application/vnd.ecowin.fileupdate": { source: "iana" }, "application/vnd.ecowin.series": { source: "iana" }, "application/vnd.ecowin.seriesrequest": { source: "iana" }, "application/vnd.ecowin.seriesupdate": { source: "iana" }, "application/vnd.efi.img": { source: "iana" }, "application/vnd.efi.iso": { source: "iana" }, "application/vnd.emclient.accessrequest+xml": { source: "iana", compressible: true }, "application/vnd.enliven": { source: "iana", extensions: ["nml"] }, "application/vnd.enphase.envoy": { source: "iana" }, "application/vnd.eprints.data+xml": { source: "iana", compressible: true }, "application/vnd.epson.esf": { source: "iana", extensions: ["esf"] }, "application/vnd.epson.msf": { source: "iana", extensions: ["msf"] }, "application/vnd.epson.quickanime": { source: "iana", extensions: ["qam"] }, "application/vnd.epson.salt": { source: "iana", extensions: ["slt"] }, "application/vnd.epson.ssf": { source: "iana", extensions: ["ssf"] }, "application/vnd.ericsson.quickcall": { source: "iana" }, "application/vnd.espass-espass+zip": { source: "iana", compressible: false }, "application/vnd.eszigno3+xml": { source: "iana", compressible: true, extensions: ["es3", "et3"] }, "application/vnd.etsi.aoc+xml": { source: "iana", compressible: true }, "application/vnd.etsi.asic-e+zip": { source: "iana", compressible: false }, "application/vnd.etsi.asic-s+zip": { source: "iana", compressible: false }, "application/vnd.etsi.cug+xml": { source: "iana", compressible: true }, "application/vnd.etsi.iptvcommand+xml": { source: "iana", compressible: true }, "application/vnd.etsi.iptvdiscovery+xml": { source: "iana", compressible: true }, "application/vnd.etsi.iptvprofile+xml": { source: "iana", compressible: true }, "application/vnd.etsi.iptvsad-bc+xml": { source: "iana", compressible: true }, "application/vnd.etsi.iptvsad-cod+xml": { source: "iana", compressible: true }, "application/vnd.etsi.iptvsad-npvr+xml": { source: "iana", compressible: true }, "application/vnd.etsi.iptvservice+xml": { source: "iana", compressible: true }, "application/vnd.etsi.iptvsync+xml": { source: "iana", compressible: true }, "application/vnd.etsi.iptvueprofile+xml": { source: "iana", compressible: true }, "application/vnd.etsi.mcid+xml": { source: "iana", compressible: true }, "application/vnd.etsi.mheg5": { source: "iana" }, "application/vnd.etsi.overload-control-policy-dataset+xml": { source: "iana", compressible: true }, "application/vnd.etsi.pstn+xml": { source: "iana", compressible: true }, "application/vnd.etsi.sci+xml": { source: "iana", compressible: true }, "application/vnd.etsi.simservs+xml": { source: "iana", compressible: true }, "application/vnd.etsi.timestamp-token": { source: "iana" }, "application/vnd.etsi.tsl+xml": { source: "iana", compressible: true }, "application/vnd.etsi.tsl.der": { source: "iana" }, "application/vnd.eu.kasparian.car+json": { source: "iana", compressible: true }, "application/vnd.eudora.data": { source: "iana" }, "application/vnd.evolv.ecig.profile": { source: "iana" }, "application/vnd.evolv.ecig.settings": { source: "iana" }, "application/vnd.evolv.ecig.theme": { source: "iana" }, "application/vnd.exstream-empower+zip": { source: "iana", compressible: false }, "application/vnd.exstream-package": { source: "iana" }, "application/vnd.ezpix-album": { source: "iana", extensions: ["ez2"] }, "application/vnd.ezpix-package": { source: "iana", extensions: ["ez3"] }, "application/vnd.f-secure.mobile": { source: "iana" }, "application/vnd.familysearch.gedcom+zip": { source: "iana", compressible: false }, "application/vnd.fastcopy-disk-image": { source: "iana" }, "application/vnd.fdf": { source: "iana", extensions: ["fdf"] }, "application/vnd.fdsn.mseed": { source: "iana", extensions: ["mseed"] }, "application/vnd.fdsn.seed": { source: "iana", extensions: ["seed", "dataless"] }, "application/vnd.ffsns": { source: "iana" }, "application/vnd.ficlab.flb+zip": { source: "iana", compressible: false }, "application/vnd.filmit.zfc": { source: "iana" }, "application/vnd.fints": { source: "iana" }, "application/vnd.firemonkeys.cloudcell": { source: "iana" }, "application/vnd.flographit": { source: "iana", extensions: ["gph"] }, "application/vnd.fluxtime.clip": { source: "iana", extensions: ["ftc"] }, "application/vnd.font-fontforge-sfd": { source: "iana" }, "application/vnd.framemaker": { source: "iana", extensions: ["fm", "frame", "maker", "book"] }, "application/vnd.frogans.fnc": { source: "iana", extensions: ["fnc"] }, "application/vnd.frogans.ltf": { source: "iana", extensions: ["ltf"] }, "application/vnd.fsc.weblaunch": { source: "iana", extensions: ["fsc"] }, "application/vnd.fujifilm.fb.docuworks": { source: "iana" }, "application/vnd.fujifilm.fb.docuworks.binder": { source: "iana" }, "application/vnd.fujifilm.fb.docuworks.container": { source: "iana" }, "application/vnd.fujifilm.fb.jfi+xml": { source: "iana", compressible: true }, "application/vnd.fujitsu.oasys": { source: "iana", extensions: ["oas"] }, "application/vnd.fujitsu.oasys2": { source: "iana", extensions: ["oa2"] }, "application/vnd.fujitsu.oasys3": { source: "iana", extensions: ["oa3"] }, "application/vnd.fujitsu.oasysgp": { source: "iana", extensions: ["fg5"] }, "application/vnd.fujitsu.oasysprs": { source: "iana", extensions: ["bh2"] }, "application/vnd.fujixerox.art-ex": { source: "iana" }, "application/vnd.fujixerox.art4": { source: "iana" }, "application/vnd.fujixerox.ddd": { source: "iana", extensions: ["ddd"] }, "application/vnd.fujixerox.docuworks": { source: "iana", extensions: ["xdw"] }, "application/vnd.fujixerox.docuworks.binder": { source: "iana", extensions: ["xbd"] }, "application/vnd.fujixerox.docuworks.container": { source: "iana" }, "application/vnd.fujixerox.hbpl": { source: "iana" }, "application/vnd.fut-misnet": { source: "iana" }, "application/vnd.futoin+cbor": { source: "iana" }, "application/vnd.futoin+json": { source: "iana", compressible: true }, "application/vnd.fuzzysheet": { source: "iana", extensions: ["fzs"] }, "application/vnd.genomatix.tuxedo": { source: "iana", extensions: ["txd"] }, "application/vnd.gentics.grd+json": { source: "iana", compressible: true }, "application/vnd.geo+json": { source: "iana", compressible: true }, "application/vnd.geocube+xml": { source: "iana", compressible: true }, "application/vnd.geogebra.file": { source: "iana", extensions: ["ggb"] }, "application/vnd.geogebra.slides": { source: "iana" }, "application/vnd.geogebra.tool": { source: "iana", extensions: ["ggt"] }, "application/vnd.geometry-explorer": { source: "iana", extensions: ["gex", "gre"] }, "application/vnd.geonext": { source: "iana", extensions: ["gxt"] }, "application/vnd.geoplan": { source: "iana", extensions: ["g2w"] }, "application/vnd.geospace": { source: "iana", extensions: ["g3w"] }, "application/vnd.gerber": { source: "iana" }, "application/vnd.globalplatform.card-content-mgt": { source: "iana" }, "application/vnd.globalplatform.card-content-mgt-response": { source: "iana" }, "application/vnd.gmx": { source: "iana", extensions: ["gmx"] }, "application/vnd.google-apps.document": { compressible: false, extensions: ["gdoc"] }, "application/vnd.google-apps.presentation": { compressible: false, extensions: ["gslides"] }, "application/vnd.google-apps.spreadsheet": { compressible: false, extensions: ["gsheet"] }, "application/vnd.google-earth.kml+xml": { source: "iana", compressible: true, extensions: ["kml"] }, "application/vnd.google-earth.kmz": { source: "iana", compressible: false, extensions: ["kmz"] }, "application/vnd.gov.sk.e-form+xml": { source: "iana", compressible: true }, "application/vnd.gov.sk.e-form+zip": { source: "iana", compressible: false }, "application/vnd.gov.sk.xmldatacontainer+xml": { source: "iana", compressible: true }, "application/vnd.grafeq": { source: "iana", extensions: ["gqf", "gqs"] }, "application/vnd.gridmp": { source: "iana" }, "application/vnd.groove-account": { source: "iana", extensions: ["gac"] }, "application/vnd.groove-help": { source: "iana", extensions: ["ghf"] }, "application/vnd.groove-identity-message": { source: "iana", extensions: ["gim"] }, "application/vnd.groove-injector": { source: "iana", extensions: ["grv"] }, "application/vnd.groove-tool-message": { source: "iana", extensions: ["gtm"] }, "application/vnd.groove-tool-template": { source: "iana", extensions: ["tpl"] }, "application/vnd.groove-vcard": { source: "iana", extensions: ["vcg"] }, "application/vnd.hal+json": { source: "iana", compressible: true }, "application/vnd.hal+xml": { source: "iana", compressible: true, extensions: ["hal"] }, "application/vnd.handheld-entertainment+xml": { source: "iana", compressible: true, extensions: ["zmm"] }, "application/vnd.hbci": { source: "iana", extensions: ["hbci"] }, "application/vnd.hc+json": { source: "iana", compressible: true }, "application/vnd.hcl-bireports": { source: "iana" }, "application/vnd.hdt": { source: "iana" }, "application/vnd.heroku+json": { source: "iana", compressible: true }, "application/vnd.hhe.lesson-player": { source: "iana", extensions: ["les"] }, "application/vnd.hl7cda+xml": { source: "iana", charset: "UTF-8", compressible: true }, "application/vnd.hl7v2+xml": { source: "iana", charset: "UTF-8", compressible: true }, "application/vnd.hp-hpgl": { source: "iana", extensions: ["hpgl"] }, "application/vnd.hp-hpid": { source: "iana", extensions: ["hpid"] }, "application/vnd.hp-hps": { source: "iana", extensions: ["hps"] }, "application/vnd.hp-jlyt": { source: "iana", extensions: ["jlt"] }, "application/vnd.hp-pcl": { source: "iana", extensions: ["pcl"] }, "application/vnd.hp-pclxl": { source: "iana", extensions: ["pclxl"] }, "application/vnd.httphone": { source: "iana" }, "application/vnd.hydrostatix.sof-data": { source: "iana", extensions: ["sfd-hdstx"] }, "application/vnd.hyper+json": { source: "iana", compressible: true }, "application/vnd.hyper-item+json": { source: "iana", compressible: true }, "application/vnd.hyperdrive+json": { source: "iana", compressible: true }, "application/vnd.hzn-3d-crossword": { source: "iana" }, "application/vnd.ibm.afplinedata": { source: "iana" }, "application/vnd.ibm.electronic-media": { source: "iana" }, "application/vnd.ibm.minipay": { source: "iana", extensions: ["mpy"] }, "application/vnd.ibm.modcap": { source: "iana", extensions: ["afp", "listafp", "list3820"] }, "application/vnd.ibm.rights-management": { source: "iana", extensions: ["irm"] }, "application/vnd.ibm.secure-container": { source: "iana", extensions: ["sc"] }, "application/vnd.iccprofile": { source: "iana", extensions: ["icc", "icm"] }, "application/vnd.ieee.1905": { source: "iana" }, "application/vnd.igloader": { source: "iana", extensions: ["igl"] }, "application/vnd.imagemeter.folder+zip": { source: "iana", compressible: false }, "application/vnd.imagemeter.image+zip": { source: "iana", compressible: false }, "application/vnd.immervision-ivp": { source: "iana", extensions: ["ivp"] }, "application/vnd.immervision-ivu": { source: "iana", extensions: ["ivu"] }, "application/vnd.ims.imsccv1p1": { source: "iana" }, "application/vnd.ims.imsccv1p2": { source: "iana" }, "application/vnd.ims.imsccv1p3": { source: "iana" }, "application/vnd.ims.lis.v2.result+json": { source: "iana", compressible: true }, "application/vnd.ims.lti.v2.toolconsumerprofile+json": { source: "iana", compressible: true }, "application/vnd.ims.lti.v2.toolproxy+json": { source: "iana", compressible: true }, "application/vnd.ims.lti.v2.toolproxy.id+json": { source: "iana", compressible: true }, "application/vnd.ims.lti.v2.toolsettings+json": { source: "iana", compressible: true }, "application/vnd.ims.lti.v2.toolsettings.simple+json": { source: "iana", compressible: true }, "application/vnd.informedcontrol.rms+xml": { source: "iana", compressible: true }, "application/vnd.informix-visionary": { source: "iana" }, "application/vnd.infotech.project": { source: "iana" }, "application/vnd.infotech.project+xml": { source: "iana", compressible: true }, "application/vnd.innopath.wamp.notification": { source: "iana" }, "application/vnd.insors.igm": { source: "iana", extensions: ["igm"] }, "application/vnd.intercon.formnet": { source: "iana", extensions: ["xpw", "xpx"] }, "application/vnd.intergeo": { source: "iana", extensions: ["i2g"] }, "application/vnd.intertrust.digibox": { source: "iana" }, "application/vnd.intertrust.nncp": { source: "iana" }, "application/vnd.intu.qbo": { source: "iana", extensions: ["qbo"] }, "application/vnd.intu.qfx": { source: "iana", extensions: ["qfx"] }, "application/vnd.iptc.g2.catalogitem+xml": { source: "iana", compressible: true }, "application/vnd.iptc.g2.conceptitem+xml": { source: "iana", compressible: true }, "application/vnd.iptc.g2.knowledgeitem+xml": { source: "iana", compressible: true }, "application/vnd.iptc.g2.newsitem+xml": { source: "iana", compressible: true }, "application/vnd.iptc.g2.newsmessage+xml": { source: "iana", compressible: true }, "application/vnd.iptc.g2.packageitem+xml": { source: "iana", compressible: true }, "application/vnd.iptc.g2.planningitem+xml": { source: "iana", compressible: true }, "application/vnd.ipunplugged.rcprofile": { source: "iana", extensions: ["rcprofile"] }, "application/vnd.irepository.package+xml": { source: "iana", compressible: true, extensions: ["irp"] }, "application/vnd.is-xpr": { source: "iana", extensions: ["xpr"] }, "application/vnd.isac.fcs": { source: "iana", extensions: ["fcs"] }, "application/vnd.iso11783-10+zip": { source: "iana", compressible: false }, "application/vnd.jam": { source: "iana", extensions: ["jam"] }, "application/vnd.japannet-directory-service": { source: "iana" }, "application/vnd.japannet-jpnstore-wakeup": { source: "iana" }, "application/vnd.japannet-payment-wakeup": { source: "iana" }, "application/vnd.japannet-registration": { source: "iana" }, "application/vnd.japannet-registration-wakeup": { source: "iana" }, "application/vnd.japannet-setstore-wakeup": { source: "iana" }, "application/vnd.japannet-verification": { source: "iana" }, "application/vnd.japannet-verification-wakeup": { source: "iana" }, "application/vnd.jcp.javame.midlet-rms": { source: "iana", extensions: ["rms"] }, "application/vnd.jisp": { source: "iana", extensions: ["jisp"] }, "application/vnd.joost.joda-archive": { source: "iana", extensions: ["joda"] }, "application/vnd.jsk.isdn-ngn": { source: "iana" }, "application/vnd.kahootz": { source: "iana", extensions: ["ktz", "ktr"] }, "application/vnd.kde.karbon": { source: "iana", extensions: ["karbon"] }, "application/vnd.kde.kchart": { source: "iana", extensions: ["chrt"] }, "application/vnd.kde.kformula": { source: "iana", extensions: ["kfo"] }, "application/vnd.kde.kivio": { source: "iana", extensions: ["flw"] }, "application/vnd.kde.kontour": { source: "iana", extensions: ["kon"] }, "application/vnd.kde.kpresenter": { source: "iana", extensions: ["kpr", "kpt"] }, "application/vnd.kde.kspread": { source: "iana", extensions: ["ksp"] }, "application/vnd.kde.kword": { source: "iana", extensions: ["kwd", "kwt"] }, "application/vnd.kenameaapp": { source: "iana", extensions: ["htke"] }, "application/vnd.kidspiration": { source: "iana", extensions: ["kia"] }, "application/vnd.kinar": { source: "iana", extensions: ["kne", "knp"] }, "application/vnd.koan": { source: "iana", extensions: ["skp", "skd", "skt", "skm"] }, "application/vnd.kodak-descriptor": { source: "iana", extensions: ["sse"] }, "application/vnd.las": { source: "iana" }, "application/vnd.las.las+json": { source: "iana", compressible: true }, "application/vnd.las.las+xml": { source: "iana", compressible: true, extensions: ["lasxml"] }, "application/vnd.laszip": { source: "iana" }, "application/vnd.leap+json": { source: "iana", compressible: true }, "application/vnd.liberty-request+xml": { source: "iana", compressible: true }, "application/vnd.llamagraphics.life-balance.desktop": { source: "iana", extensions: ["lbd"] }, "application/vnd.llamagraphics.life-balance.exchange+xml": { source: "iana", compressible: true, extensions: ["lbe"] }, "application/vnd.logipipe.circuit+zip": { source: "iana", compressible: false }, "application/vnd.loom": { source: "iana" }, "application/vnd.lotus-1-2-3": { source: "iana", extensions: ["123"] }, "application/vnd.lotus-approach": { source: "iana", extensions: ["apr"] }, "application/vnd.lotus-freelance": { source: "iana", extensions: ["pre"] }, "application/vnd.lotus-notes": { source: "iana", extensions: ["nsf"] }, "application/vnd.lotus-organizer": { source: "iana", extensions: ["org"] }, "application/vnd.lotus-screencam": { source: "iana", extensions: ["scm"] }, "application/vnd.lotus-wordpro": { source: "iana", extensions: ["lwp"] }, "application/vnd.macports.portpkg": { source: "iana", extensions: ["portpkg"] }, "application/vnd.mapbox-vector-tile": { source: "iana", extensions: ["mvt"] }, "application/vnd.marlin.drm.actiontoken+xml": { source: "iana", compressible: true }, "application/vnd.marlin.drm.conftoken+xml": { source: "iana", compressible: true }, "application/vnd.marlin.drm.license+xml": { source: "iana", compressible: true }, "application/vnd.marlin.drm.mdcf": { source: "iana" }, "application/vnd.mason+json": { source: "iana", compressible: true }, "application/vnd.maxar.archive.3tz+zip": { source: "iana", compressible: false }, "application/vnd.maxmind.maxmind-db": { source: "iana" }, "application/vnd.mcd": { source: "iana", extensions: ["mcd"] }, "application/vnd.medcalcdata": { source: "iana", extensions: ["mc1"] }, "application/vnd.mediastation.cdkey": { source: "iana", extensions: ["cdkey"] }, "application/vnd.meridian-slingshot": { source: "iana" }, "application/vnd.mfer": { source: "iana", extensions: ["mwf"] }, "application/vnd.mfmp": { source: "iana", extensions: ["mfm"] }, "application/vnd.micro+json": { source: "iana", compressible: true }, "application/vnd.micrografx.flo": { source: "iana", extensions: ["flo"] }, "application/vnd.micrografx.igx": { source: "iana", extensions: ["igx"] }, "application/vnd.microsoft.portable-executable": { source: "iana" }, "application/vnd.microsoft.windows.thumbnail-cache": { source: "iana" }, "application/vnd.miele+json": { source: "iana", compressible: true }, "application/vnd.mif": { source: "iana", extensions: ["mif"] }, "application/vnd.minisoft-hp3000-save": { source: "iana" }, "application/vnd.mitsubishi.misty-guard.trustweb": { source: "iana" }, "application/vnd.mobius.daf": { source: "iana", extensions: ["daf"] }, "application/vnd.mobius.dis": { source: "iana", extensions: ["dis"] }, "application/vnd.mobius.mbk": { source: "iana", extensions: ["mbk"] }, "application/vnd.mobius.mqy": { source: "iana", extensions: ["mqy"] }, "application/vnd.mobius.msl": { source: "iana", extensions: ["msl"] }, "application/vnd.mobius.plc": { source: "iana", extensions: ["plc"] }, "application/vnd.mobius.txf": { source: "iana", extensions: ["txf"] }, "application/vnd.mophun.application": { source: "iana", extensions: ["mpn"] }, "application/vnd.mophun.certificate": { source: "iana", extensions: ["mpc"] }, "application/vnd.motorola.flexsuite": { source: "iana" }, "application/vnd.motorola.flexsuite.adsi": { source: "iana" }, "application/vnd.motorola.flexsuite.fis": { source: "iana" }, "application/vnd.motorola.flexsuite.gotap": { source: "iana" }, "application/vnd.motorola.flexsuite.kmr": { source: "iana" }, "application/vnd.motorola.flexsuite.ttc": { source: "iana" }, "application/vnd.motorola.flexsuite.wem": { source: "iana" }, "application/vnd.motorola.iprm": { source: "iana" }, "application/vnd.mozilla.xul+xml": { source: "iana", compressible: true, extensions: ["xul"] }, "application/vnd.ms-3mfdocument": { source: "iana" }, "application/vnd.ms-artgalry": { source: "iana", extensions: ["cil"] }, "application/vnd.ms-asf": { source: "iana" }, "application/vnd.ms-cab-compressed": { source: "iana", extensions: ["cab"] }, "application/vnd.ms-color.iccprofile": { source: "apache" }, "application/vnd.ms-excel": { source: "iana", compressible: false, extensions: ["xls", "xlm", "xla", "xlc", "xlt", "xlw"] }, "application/vnd.ms-excel.addin.macroenabled.12": { source: "iana", extensions: ["xlam"] }, "application/vnd.ms-excel.sheet.binary.macroenabled.12": { source: "iana", extensions: ["xlsb"] }, "application/vnd.ms-excel.sheet.macroenabled.12": { source: "iana", extensions: ["xlsm"] }, "application/vnd.ms-excel.template.macroenabled.12": { source: "iana", extensions: ["xltm"] }, "application/vnd.ms-fontobject": { source: "iana", compressible: true, extensions: ["eot"] }, "application/vnd.ms-htmlhelp": { source: "iana", extensions: ["chm"] }, "application/vnd.ms-ims": { source: "iana", extensions: ["ims"] }, "application/vnd.ms-lrm": { source: "iana", extensions: ["lrm"] }, "application/vnd.ms-office.activex+xml": { source: "iana", compressible: true }, "application/vnd.ms-officetheme": { source: "iana", extensions: ["thmx"] }, "application/vnd.ms-opentype": { source: "apache", compressible: true }, "application/vnd.ms-outlook": { compressible: false, extensions: ["msg"] }, "application/vnd.ms-package.obfuscated-opentype": { source: "apache" }, "application/vnd.ms-pki.seccat": { source: "apache", extensions: ["cat"] }, "application/vnd.ms-pki.stl": { source: "apache", extensions: ["stl"] }, "application/vnd.ms-playready.initiator+xml": { source: "iana", compressible: true }, "application/vnd.ms-powerpoint": { source: "iana", compressible: false, extensions: ["ppt", "pps", "pot"] }, "application/vnd.ms-powerpoint.addin.macroenabled.12": { source: "iana", extensions: ["ppam"] }, "application/vnd.ms-powerpoint.presentation.macroenabled.12": { source: "iana", extensions: ["pptm"] }, "application/vnd.ms-powerpoint.slide.macroenabled.12": { source: "iana", extensions: ["sldm"] }, "application/vnd.ms-powerpoint.slideshow.macroenabled.12": { source: "iana", extensions: ["ppsm"] }, "application/vnd.ms-powerpoint.template.macroenabled.12": { source: "iana", extensions: ["potm"] }, "application/vnd.ms-printdevicecapabilities+xml": { source: "iana", compressible: true }, "application/vnd.ms-printing.printticket+xml": { source: "apache", compressible: true }, "application/vnd.ms-printschematicket+xml": { source: "iana", compressible: true }, "application/vnd.ms-project": { source: "iana", extensions: ["mpp", "mpt"] }, "application/vnd.ms-tnef": { source: "iana" }, "application/vnd.ms-windows.devicepairing": { source: "iana" }, "application/vnd.ms-windows.nwprinting.oob": { source: "iana" }, "application/vnd.ms-windows.printerpairing": { source: "iana" }, "application/vnd.ms-windows.wsd.oob": { source: "iana" }, "application/vnd.ms-wmdrm.lic-chlg-req": { source: "iana" }, "application/vnd.ms-wmdrm.lic-resp": { source: "iana" }, "application/vnd.ms-wmdrm.meter-chlg-req": { source: "iana" }, "application/vnd.ms-wmdrm.meter-resp": { source: "iana" }, "application/vnd.ms-word.document.macroenabled.12": { source: "iana", extensions: ["docm"] }, "application/vnd.ms-word.template.macroenabled.12": { source: "iana", extensions: ["dotm"] }, "application/vnd.ms-works": { source: "iana", extensions: ["wps", "wks", "wcm", "wdb"] }, "application/vnd.ms-wpl": { source: "iana", extensions: ["wpl"] }, "application/vnd.ms-xpsdocument": { source: "iana", compressible: false, extensions: ["xps"] }, "application/vnd.msa-disk-image": { source: "iana" }, "application/vnd.mseq": { source: "iana", extensions: ["mseq"] }, "application/vnd.msign": { source: "iana" }, "application/vnd.multiad.creator": { source: "iana" }, "application/vnd.multiad.creator.cif": { source: "iana" }, "application/vnd.music-niff": { source: "iana" }, "application/vnd.musician": { source: "iana", extensions: ["mus"] }, "application/vnd.muvee.style": { source: "iana", extensions: ["msty"] }, "application/vnd.mynfc": { source: "iana", extensions: ["taglet"] }, "application/vnd.nacamar.ybrid+json": { source: "iana", compressible: true }, "application/vnd.ncd.control": { source: "iana" }, "application/vnd.ncd.reference": { source: "iana" }, "application/vnd.nearst.inv+json": { source: "iana", compressible: true }, "application/vnd.nebumind.line": { source: "iana" }, "application/vnd.nervana": { source: "iana" }, "application/vnd.netfpx": { source: "iana" }, "application/vnd.neurolanguage.nlu": { source: "iana", extensions: ["nlu"] }, "application/vnd.nimn": { source: "iana" }, "application/vnd.nintendo.nitro.rom": { source: "iana" }, "application/vnd.nintendo.snes.rom": { source: "iana" }, "application/vnd.nitf": { source: "iana", extensions: ["ntf", "nitf"] }, "application/vnd.noblenet-directory": { source: "iana", extensions: ["nnd"] }, "application/vnd.noblenet-sealer": { source: "iana", extensions: ["nns"] }, "application/vnd.noblenet-web": { source: "iana", extensions: ["nnw"] }, "application/vnd.nokia.catalogs": { source: "iana" }, "application/vnd.nokia.conml+wbxml": { source: "iana" }, "application/vnd.nokia.conml+xml": { source: "iana", compressible: true }, "application/vnd.nokia.iptv.config+xml": { source: "iana", compressible: true }, "application/vnd.nokia.isds-radio-presets": { source: "iana" }, "application/vnd.nokia.landmark+wbxml": { source: "iana" }, "application/vnd.nokia.landmark+xml": { source: "iana", compressible: true }, "application/vnd.nokia.landmarkcollection+xml": { source: "iana", compressible: true }, "application/vnd.nokia.n-gage.ac+xml": { source: "iana", compressible: true, extensions: ["ac"] }, "application/vnd.nokia.n-gage.data": { source: "iana", extensions: ["ngdat"] }, "application/vnd.nokia.n-gage.symbian.install": { source: "iana", extensions: ["n-gage"] }, "application/vnd.nokia.ncd": { source: "iana" }, "application/vnd.nokia.pcd+wbxml": { source: "iana" }, "application/vnd.nokia.pcd+xml": { source: "iana", compressible: true }, "application/vnd.nokia.radio-preset": { source: "iana", extensions: ["rpst"] }, "application/vnd.nokia.radio-presets": { source: "iana", extensions: ["rpss"] }, "application/vnd.novadigm.edm": { source: "iana", extensions: ["edm"] }, "application/vnd.novadigm.edx": { source: "iana", extensions: ["edx"] }, "application/vnd.novadigm.ext": { source: "iana", extensions: ["ext"] }, "application/vnd.ntt-local.content-share": { source: "iana" }, "application/vnd.ntt-local.file-transfer": { source: "iana" }, "application/vnd.ntt-local.ogw_remote-access": { source: "iana" }, "application/vnd.ntt-local.sip-ta_remote": { source: "iana" }, "application/vnd.ntt-local.sip-ta_tcp_stream": { source: "iana" }, "application/vnd.oasis.opendocument.chart": { source: "iana", extensions: ["odc"] }, "application/vnd.oasis.opendocument.chart-template": { source: "iana", extensions: ["otc"] }, "application/vnd.oasis.opendocument.database": { source: "iana", extensions: ["odb"] }, "application/vnd.oasis.opendocument.formula": { source: "iana", extensions: ["odf"] }, "application/vnd.oasis.opendocument.formula-template": { source: "iana", extensions: ["odft"] }, "application/vnd.oasis.opendocument.graphics": { source: "iana", compressible: false, extensions: ["odg"] }, "application/vnd.oasis.opendocument.graphics-template": { source: "iana", extensions: ["otg"] }, "application/vnd.oasis.opendocument.image": { source: "iana", extensions: ["odi"] }, "application/vnd.oasis.opendocument.image-template": { source: "iana", extensions: ["oti"] }, "application/vnd.oasis.opendocument.presentation": { source: "iana", compressible: false, extensions: ["odp"] }, "application/vnd.oasis.opendocument.presentation-template": { source: "iana", extensions: ["otp"] }, "application/vnd.oasis.opendocument.spreadsheet": { source: "iana", compressible: false, extensions: ["ods"] }, "application/vnd.oasis.opendocument.spreadsheet-template": { source: "iana", extensions: ["ots"] }, "application/vnd.oasis.opendocument.text": { source: "iana", compressible: false, extensions: ["odt"] }, "application/vnd.oasis.opendocument.text-master": { source: "iana", extensions: ["odm"] }, "application/vnd.oasis.opendocument.text-template": { source: "iana", extensions: ["ott"] }, "application/vnd.oasis.opendocument.text-web": { source: "iana", extensions: ["oth"] }, "application/vnd.obn": { source: "iana" }, "application/vnd.ocf+cbor": { source: "iana" }, "application/vnd.oci.image.manifest.v1+json": { source: "iana", compressible: true }, "application/vnd.oftn.l10n+json": { source: "iana", compressible: true }, "application/vnd.oipf.contentaccessdownload+xml": { source: "iana", compressible: true }, "application/vnd.oipf.contentaccessstreaming+xml": { source: "iana", compressible: true }, "application/vnd.oipf.cspg-hexbinary": { source: "iana" }, "application/vnd.oipf.dae.svg+xml": { source: "iana", compressible: true }, "application/vnd.oipf.dae.xhtml+xml": { source: "iana", compressible: true }, "application/vnd.oipf.mippvcontrolmessage+xml": { source: "iana", compressible: true }, "application/vnd.oipf.pae.gem": { source: "iana" }, "application/vnd.oipf.spdiscovery+xml": { source: "iana", compressible: true }, "application/vnd.oipf.spdlist+xml": { source: "iana", compressible: true }, "application/vnd.oipf.ueprofile+xml": { source: "iana", compressible: true }, "application/vnd.oipf.userprofile+xml": { source: "iana", compressible: true }, "application/vnd.olpc-sugar": { source: "iana", extensions: ["xo"] }, "application/vnd.oma-scws-config": { source: "iana" }, "application/vnd.oma-scws-http-request": { source: "iana" }, "application/vnd.oma-scws-http-response": { source: "iana" }, "application/vnd.oma.bcast.associated-procedure-parameter+xml": { source: "iana", compressible: true }, "application/vnd.oma.bcast.drm-trigger+xml": { source: "iana", compressible: true }, "application/vnd.oma.bcast.imd+xml": { source: "iana", compressible: true }, "application/vnd.oma.bcast.ltkm": { source: "iana" }, "application/vnd.oma.bcast.notification+xml": { source: "iana", compressible: true }, "application/vnd.oma.bcast.provisioningtrigger": { source: "iana" }, "application/vnd.oma.bcast.sgboot": { source: "iana" }, "application/vnd.oma.bcast.sgdd+xml": { source: "iana", compressible: true }, "application/vnd.oma.bcast.sgdu": { source: "iana" }, "application/vnd.oma.bcast.simple-symbol-container": { source: "iana" }, "application/vnd.oma.bcast.smartcard-trigger+xml": { source: "iana", compressible: true }, "application/vnd.oma.bcast.sprov+xml": { source: "iana", compressible: true }, "application/vnd.oma.bcast.stkm": { source: "iana" }, "application/vnd.oma.cab-address-book+xml": { source: "iana", compressible: true }, "application/vnd.oma.cab-feature-handler+xml": { source: "iana", compressible: true }, "application/vnd.oma.cab-pcc+xml": { source: "iana", compressible: true }, "application/vnd.oma.cab-subs-invite+xml": { source: "iana", compressible: true }, "application/vnd.oma.cab-user-prefs+xml": { source: "iana", compressible: true }, "application/vnd.oma.dcd": { source: "iana" }, "application/vnd.oma.dcdc": { source: "iana" }, "application/vnd.oma.dd2+xml": { source: "iana", compressible: true, extensions: ["dd2"] }, "application/vnd.oma.drm.risd+xml": { source: "iana", compressible: true }, "application/vnd.oma.group-usage-list+xml": { source: "iana", compressible: true }, "application/vnd.oma.lwm2m+cbor": { source: "iana" }, "application/vnd.oma.lwm2m+json": { source: "iana", compressible: true }, "application/vnd.oma.lwm2m+tlv": { source: "iana" }, "application/vnd.oma.pal+xml": { source: "iana", compressible: true }, "application/vnd.oma.poc.detailed-progress-report+xml": { source: "iana", compressible: true }, "application/vnd.oma.poc.final-report+xml": { source: "iana", compressible: true }, "application/vnd.oma.poc.groups+xml": { source: "iana", compressible: true }, "application/vnd.oma.poc.invocation-descriptor+xml": { source: "iana", compressible: true }, "application/vnd.oma.poc.optimized-progress-report+xml": { source: "iana", compressible: true }, "application/vnd.oma.push": { source: "iana" }, "application/vnd.oma.scidm.messages+xml": { source: "iana", compressible: true }, "application/vnd.oma.xcap-directory+xml": { source: "iana", compressible: true }, "application/vnd.omads-email+xml": { source: "iana", charset: "UTF-8", compressible: true }, "application/vnd.omads-file+xml": { source: "iana", charset: "UTF-8", compressible: true }, "application/vnd.omads-folder+xml": { source: "iana", charset: "UTF-8", compressible: true }, "application/vnd.omaloc-supl-init": { source: "iana" }, "application/vnd.onepager": { source: "iana" }, "application/vnd.onepagertamp": { source: "iana" }, "application/vnd.onepagertamx": { source: "iana" }, "application/vnd.onepagertat": { source: "iana" }, "application/vnd.onepagertatp": { source: "iana" }, "application/vnd.onepagertatx": { source: "iana" }, "application/vnd.openblox.game+xml": { source: "iana", compressible: true, extensions: ["obgx"] }, "application/vnd.openblox.game-binary": { source: "iana" }, "application/vnd.openeye.oeb": { source: "iana" }, "application/vnd.openofficeorg.extension": { source: "apache", extensions: ["oxt"] }, "application/vnd.openstreetmap.data+xml": { source: "iana", compressible: true, extensions: ["osm"] }, "application/vnd.opentimestamps.ots": { source: "iana" }, "application/vnd.openxmlformats-officedocument.custom-properties+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.customxmlproperties+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.drawing+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.extended-properties+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.presentationml.comments+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.presentationml.presentation": { source: "iana", compressible: false, extensions: ["pptx"] }, "application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.presentationml.presprops+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.presentationml.slide": { source: "iana", extensions: ["sldx"] }, "application/vnd.openxmlformats-officedocument.presentationml.slide+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.presentationml.slideshow": { source: "iana", extensions: ["ppsx"] }, "application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.presentationml.tags+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.presentationml.template": { source: "iana", extensions: ["potx"] }, "application/vnd.openxmlformats-officedocument.presentationml.template.main+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": { source: "iana", compressible: false, extensions: ["xlsx"] }, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.spreadsheetml.template": { source: "iana", extensions: ["xltx"] }, "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.theme+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.themeoverride+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.vmldrawing": { source: "iana" }, "application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.wordprocessingml.document": { source: "iana", compressible: false, extensions: ["docx"] }, "application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.wordprocessingml.template": { source: "iana", extensions: ["dotx"] }, "application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-package.core-properties+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml": { source: "iana", compressible: true }, "application/vnd.openxmlformats-package.relationships+xml": { source: "iana", compressible: true }, "application/vnd.oracle.resource+json": { source: "iana", compressible: true }, "application/vnd.orange.indata": { source: "iana" }, "application/vnd.osa.netdeploy": { source: "iana" }, "application/vnd.osgeo.mapguide.package": { source: "iana", extensions: ["mgp"] }, "application/vnd.osgi.bundle": { source: "iana" }, "application/vnd.osgi.dp": { source: "iana", extensions: ["dp"] }, "application/vnd.osgi.subsystem": { source: "iana", extensions: ["esa"] }, "application/vnd.otps.ct-kip+xml": { source: "iana", compressible: true }, "application/vnd.oxli.countgraph": { source: "iana" }, "application/vnd.pagerduty+json": { source: "iana", compressible: true }, "application/vnd.palm": { source: "iana", extensions: ["pdb", "pqa", "oprc"] }, "application/vnd.panoply": { source: "iana" }, "application/vnd.paos.xml": { source: "iana" }, "application/vnd.patentdive": { source: "iana" }, "application/vnd.patientecommsdoc": { source: "iana" }, "application/vnd.pawaafile": { source: "iana", extensions: ["paw"] }, "application/vnd.pcos": { source: "iana" }, "application/vnd.pg.format": { source: "iana", extensions: ["str"] }, "application/vnd.pg.osasli": { source: "iana", extensions: ["ei6"] }, "application/vnd.piaccess.application-licence": { source: "iana" }, "application/vnd.picsel": { source: "iana", extensions: ["efif"] }, "application/vnd.pmi.widget": { source: "iana", extensions: ["wg"] }, "application/vnd.poc.group-advertisement+xml": { source: "iana", compressible: true }, "application/vnd.pocketlearn": { source: "iana", extensions: ["plf"] }, "application/vnd.powerbuilder6": { source: "iana", extensions: ["pbd"] }, "application/vnd.powerbuilder6-s": { source: "iana" }, "application/vnd.powerbuilder7": { source: "iana" }, "application/vnd.powerbuilder7-s": { source: "iana" }, "application/vnd.powerbuilder75": { source: "iana" }, "application/vnd.powerbuilder75-s": { source: "iana" }, "application/vnd.preminet": { source: "iana" }, "application/vnd.previewsystems.box": { source: "iana", extensions: ["box"] }, "application/vnd.proteus.magazine": { source: "iana", extensions: ["mgz"] }, "application/vnd.psfs": { source: "iana" }, "application/vnd.publishare-delta-tree": { source: "iana", extensions: ["qps"] }, "application/vnd.pvi.ptid1": { source: "iana", extensions: ["ptid"] }, "application/vnd.pwg-multiplexed": { source: "iana" }, "application/vnd.pwg-xhtml-print+xml": { source: "iana", compressible: true }, "application/vnd.qualcomm.brew-app-res": { source: "iana" }, "application/vnd.quarantainenet": { source: "iana" }, "application/vnd.quark.quarkxpress": { source: "iana", extensions: ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"] }, "application/vnd.quobject-quoxdocument": { source: "iana" }, "application/vnd.radisys.moml+xml": { source: "iana", compressible: true }, "application/vnd.radisys.msml+xml": { source: "iana", compressible: true }, "application/vnd.radisys.msml-audit+xml": { source: "iana", compressible: true }, "application/vnd.radisys.msml-audit-conf+xml": { source: "iana", compressible: true }, "application/vnd.radisys.msml-audit-conn+xml": { source: "iana", compressible: true }, "application/vnd.radisys.msml-audit-dialog+xml": { source: "iana", compressible: true }, "application/vnd.radisys.msml-audit-stream+xml": { source: "iana", compressible: true }, "application/vnd.radisys.msml-conf+xml": { source: "iana", compressible: true }, "application/vnd.radisys.msml-dialog+xml": { source: "iana", compressible: true }, "application/vnd.radisys.msml-dialog-base+xml": { source: "iana", compressible: true }, "application/vnd.radisys.msml-dialog-fax-detect+xml": { source: "iana", compressible: true }, "application/vnd.radisys.msml-dialog-fax-sendrecv+xml": { source: "iana", compressible: true }, "application/vnd.radisys.msml-dialog-group+xml": { source: "iana", compressible: true }, "application/vnd.radisys.msml-dialog-speech+xml": { source: "iana", compressible: true }, "application/vnd.radisys.msml-dialog-transform+xml": { source: "iana", compressible: true }, "application/vnd.rainstor.data": { source: "iana" }, "application/vnd.rapid": { source: "iana" }, "application/vnd.rar": { source: "iana", extensions: ["rar"] }, "application/vnd.realvnc.bed": { source: "iana", extensions: ["bed"] }, "application/vnd.recordare.musicxml": { source: "iana", extensions: ["mxl"] }, "application/vnd.recordare.musicxml+xml": { source: "iana", compressible: true, extensions: ["musicxml"] }, "application/vnd.renlearn.rlprint": { source: "iana" }, "application/vnd.resilient.logic": { source: "iana" }, "application/vnd.restful+json": { source: "iana", compressible: true }, "application/vnd.rig.cryptonote": { source: "iana", extensions: ["cryptonote"] }, "application/vnd.rim.cod": { source: "apache", extensions: ["cod"] }, "application/vnd.rn-realmedia": { source: "apache", extensions: ["rm"] }, "application/vnd.rn-realmedia-vbr": { source: "apache", extensions: ["rmvb"] }, "application/vnd.route66.link66+xml": { source: "iana", compressible: true, extensions: ["link66"] }, "application/vnd.rs-274x": { source: "iana" }, "application/vnd.ruckus.download": { source: "iana" }, "application/vnd.s3sms": { source: "iana" }, "application/vnd.sailingtracker.track": { source: "iana", extensions: ["st"] }, "application/vnd.sar": { source: "iana" }, "application/vnd.sbm.cid": { source: "iana" }, "application/vnd.sbm.mid2": { source: "iana" }, "application/vnd.scribus": { source: "iana" }, "application/vnd.sealed.3df": { source: "iana" }, "application/vnd.sealed.csf": { source: "iana" }, "application/vnd.sealed.doc": { source: "iana" }, "application/vnd.sealed.eml": { source: "iana" }, "application/vnd.sealed.mht": { source: "iana" }, "application/vnd.sealed.net": { source: "iana" }, "application/vnd.sealed.ppt": { source: "iana" }, "application/vnd.sealed.tiff": { source: "iana" }, "application/vnd.sealed.xls": { source: "iana" }, "application/vnd.sealedmedia.softseal.html": { source: "iana" }, "application/vnd.sealedmedia.softseal.pdf": { source: "iana" }, "application/vnd.seemail": { source: "iana", extensions: ["see"] }, "application/vnd.seis+json": { source: "iana", compressible: true }, "application/vnd.sema": { source: "iana", extensions: ["sema"] }, "application/vnd.semd": { source: "iana", extensions: ["semd"] }, "application/vnd.semf": { source: "iana", extensions: ["semf"] }, "application/vnd.shade-save-file": { source: "iana" }, "application/vnd.shana.informed.formdata": { source: "iana", extensions: ["ifm"] }, "application/vnd.shana.informed.formtemplate": { source: "iana", extensions: ["itp"] }, "application/vnd.shana.informed.interchange": { source: "iana", extensions: ["iif"] }, "application/vnd.shana.informed.package": { source: "iana", extensions: ["ipk"] }, "application/vnd.shootproof+json": { source: "iana", compressible: true }, "application/vnd.shopkick+json": { source: "iana", compressible: true }, "application/vnd.shp": { source: "iana" }, "application/vnd.shx": { source: "iana" }, "application/vnd.sigrok.session": { source: "iana" }, "application/vnd.simtech-mindmapper": { source: "iana", extensions: ["twd", "twds"] }, "application/vnd.siren+json": { source: "iana", compressible: true }, "application/vnd.smaf": { source: "iana", extensions: ["mmf"] }, "application/vnd.smart.notebook": { source: "iana" }, "application/vnd.smart.teacher": { source: "iana", extensions: ["teacher"] }, "application/vnd.snesdev-page-table": { source: "iana" }, "application/vnd.software602.filler.form+xml": { source: "iana", compressible: true, extensions: ["fo"] }, "application/vnd.software602.filler.form-xml-zip": { source: "iana" }, "application/vnd.solent.sdkm+xml": { source: "iana", compressible: true, extensions: ["sdkm", "sdkd"] }, "application/vnd.spotfire.dxp": { source: "iana", extensions: ["dxp"] }, "application/vnd.spotfire.sfs": { source: "iana", extensions: ["sfs"] }, "application/vnd.sqlite3": { source: "iana" }, "application/vnd.sss-cod": { source: "iana" }, "application/vnd.sss-dtf": { source: "iana" }, "application/vnd.sss-ntf": { source: "iana" }, "application/vnd.stardivision.calc": { source: "apache", extensions: ["sdc"] }, "application/vnd.stardivision.draw": { source: "apache", extensions: ["sda"] }, "application/vnd.stardivision.impress": { source: "apache", extensions: ["sdd"] }, "application/vnd.stardivision.math": { source: "apache", extensions: ["smf"] }, "application/vnd.stardivision.writer": { source: "apache", extensions: ["sdw", "vor"] }, "application/vnd.stardivision.writer-global": { source: "apache", extensions: ["sgl"] }, "application/vnd.stepmania.package": { source: "iana", extensions: ["smzip"] }, "application/vnd.stepmania.stepchart": { source: "iana", extensions: ["sm"] }, "application/vnd.street-stream": { source: "iana" }, "application/vnd.sun.wadl+xml": { source: "iana", compressible: true, extensions: ["wadl"] }, "application/vnd.sun.xml.calc": { source: "apache", extensions: ["sxc"] }, "application/vnd.sun.xml.calc.template": { source: "apache", extensions: ["stc"] }, "application/vnd.sun.xml.draw": { source: "apache", extensions: ["sxd"] }, "application/vnd.sun.xml.draw.template": { source: "apache", extensions: ["std"] }, "application/vnd.sun.xml.impress": { source: "apache", extensions: ["sxi"] }, "application/vnd.sun.xml.impress.template": { source: "apache", extensions: ["sti"] }, "application/vnd.sun.xml.math": { source: "apache", extensions: ["sxm"] }, "application/vnd.sun.xml.writer": { source: "apache", extensions: ["sxw"] }, "application/vnd.sun.xml.writer.global": { source: "apache", extensions: ["sxg"] }, "application/vnd.sun.xml.writer.template": { source: "apache", extensions: ["stw"] }, "application/vnd.sus-calendar": { source: "iana", extensions: ["sus", "susp"] }, "application/vnd.svd": { source: "iana", extensions: ["svd"] }, "application/vnd.swiftview-ics": { source: "iana" }, "application/vnd.sycle+xml": { source: "iana", compressible: true }, "application/vnd.syft+json": { source: "iana", compressible: true }, "application/vnd.symbian.install": { source: "apache", extensions: ["sis", "sisx"] }, "application/vnd.syncml+xml": { source: "iana", charset: "UTF-8", compressible: true, extensions: ["xsm"] }, "application/vnd.syncml.dm+wbxml": { source: "iana", charset: "UTF-8", extensions: ["bdm"] }, "application/vnd.syncml.dm+xml": { source: "iana", charset: "UTF-8", compressible: true, extensions: ["xdm"] }, "application/vnd.syncml.dm.notification": { source: "iana" }, "application/vnd.syncml.dmddf+wbxml": { source: "iana" }, "application/vnd.syncml.dmddf+xml": { source: "iana", charset: "UTF-8", compressible: true, extensions: ["ddf"] }, "application/vnd.syncml.dmtnds+wbxml": { source: "iana" }, "application/vnd.syncml.dmtnds+xml": { source: "iana", charset: "UTF-8", compressible: true }, "application/vnd.syncml.ds.notification": { source: "iana" }, "application/vnd.tableschema+json": { source: "iana", compressible: true }, "application/vnd.tao.intent-module-archive": { source: "iana", extensions: ["tao"] }, "application/vnd.tcpdump.pcap": { source: "iana", extensions: ["pcap", "cap", "dmp"] }, "application/vnd.think-cell.ppttc+json": { source: "iana", compressible: true }, "application/vnd.tmd.mediaflex.api+xml": { source: "iana", compressible: true }, "application/vnd.tml": { source: "iana" }, "application/vnd.tmobile-livetv": { source: "iana", extensions: ["tmo"] }, "application/vnd.tri.onesource": { source: "iana" }, "application/vnd.trid.tpt": { source: "iana", extensions: ["tpt"] }, "application/vnd.triscape.mxs": { source: "iana", extensions: ["mxs"] }, "application/vnd.trueapp": { source: "iana", extensions: ["tra"] }, "application/vnd.truedoc": { source: "iana" }, "application/vnd.ubisoft.webplayer": { source: "iana" }, "application/vnd.ufdl": { source: "iana", extensions: ["ufd", "ufdl"] }, "application/vnd.uiq.theme": { source: "iana", extensions: ["utz"] }, "application/vnd.umajin": { source: "iana", extensions: ["umj"] }, "application/vnd.unity": { source: "iana", extensions: ["unityweb"] }, "application/vnd.uoml+xml": { source: "iana", compressible: true, extensions: ["uoml"] }, "application/vnd.uplanet.alert": { source: "iana" }, "application/vnd.uplanet.alert-wbxml": { source: "iana" }, "application/vnd.uplanet.bearer-choice": { source: "iana" }, "application/vnd.uplanet.bearer-choice-wbxml": { source: "iana" }, "application/vnd.uplanet.cacheop": { source: "iana" }, "application/vnd.uplanet.cacheop-wbxml": { source: "iana" }, "application/vnd.uplanet.channel": { source: "iana" }, "application/vnd.uplanet.channel-wbxml": { source: "iana" }, "application/vnd.uplanet.list": { source: "iana" }, "application/vnd.uplanet.list-wbxml": { source: "iana" }, "application/vnd.uplanet.listcmd": { source: "iana" }, "application/vnd.uplanet.listcmd-wbxml": { source: "iana" }, "application/vnd.uplanet.signal": { source: "iana" }, "application/vnd.uri-map": { source: "iana" }, "application/vnd.valve.source.material": { source: "iana" }, "application/vnd.vcx": { source: "iana", extensions: ["vcx"] }, "application/vnd.vd-study": { source: "iana" }, "application/vnd.vectorworks": { source: "iana" }, "application/vnd.vel+json": { source: "iana", compressible: true }, "application/vnd.verimatrix.vcas": { source: "iana" }, "application/vnd.veritone.aion+json": { source: "iana", compressible: true }, "application/vnd.veryant.thin": { source: "iana" }, "application/vnd.ves.encrypted": { source: "iana" }, "application/vnd.vidsoft.vidconference": { source: "iana" }, "application/vnd.visio": { source: "iana", extensions: ["vsd", "vst", "vss", "vsw"] }, "application/vnd.visionary": { source: "iana", extensions: ["vis"] }, "application/vnd.vividence.scriptfile": { source: "iana" }, "application/vnd.vsf": { source: "iana", extensions: ["vsf"] }, "application/vnd.wap.sic": { source: "iana" }, "application/vnd.wap.slc": { source: "iana" }, "application/vnd.wap.wbxml": { source: "iana", charset: "UTF-8", extensions: ["wbxml"] }, "application/vnd.wap.wmlc": { source: "iana", extensions: ["wmlc"] }, "application/vnd.wap.wmlscriptc": { source: "iana", extensions: ["wmlsc"] }, "application/vnd.webturbo": { source: "iana", extensions: ["wtb"] }, "application/vnd.wfa.dpp": { source: "iana" }, "application/vnd.wfa.p2p": { source: "iana" }, "application/vnd.wfa.wsc": { source: "iana" }, "application/vnd.windows.devicepairing": { source: "iana" }, "application/vnd.wmc": { source: "iana" }, "application/vnd.wmf.bootstrap": { source: "iana" }, "application/vnd.wolfram.mathematica": { source: "iana" }, "application/vnd.wolfram.mathematica.package": { source: "iana" }, "application/vnd.wolfram.player": { source: "iana", extensions: ["nbp"] }, "application/vnd.wordperfect": { source: "iana", extensions: ["wpd"] }, "application/vnd.wqd": { source: "iana", extensions: ["wqd"] }, "application/vnd.wrq-hp3000-labelled": { source: "iana" }, "application/vnd.wt.stf": { source: "iana", extensions: ["stf"] }, "application/vnd.wv.csp+wbxml": { source: "iana" }, "application/vnd.wv.csp+xml": { source: "iana", compressible: true }, "application/vnd.wv.ssp+xml": { source: "iana", compressible: true }, "application/vnd.xacml+json": { source: "iana", compressible: true }, "application/vnd.xara": { source: "iana", extensions: ["xar"] }, "application/vnd.xfdl": { source: "iana", extensions: ["xfdl"] }, "application/vnd.xfdl.webform": { source: "iana" }, "application/vnd.xmi+xml": { source: "iana", compressible: true }, "application/vnd.xmpie.cpkg": { source: "iana" }, "application/vnd.xmpie.dpkg": { source: "iana" }, "application/vnd.xmpie.plan": { source: "iana" }, "application/vnd.xmpie.ppkg": { source: "iana" }, "application/vnd.xmpie.xlim": { source: "iana" }, "application/vnd.yamaha.hv-dic": { source: "iana", extensions: ["hvd"] }, "application/vnd.yamaha.hv-script": { source: "iana", extensions: ["hvs"] }, "application/vnd.yamaha.hv-voice": { source: "iana", extensions: ["hvp"] }, "application/vnd.yamaha.openscoreformat": { source: "iana", extensions: ["osf"] }, "application/vnd.yamaha.openscoreformat.osfpvg+xml": { source: "iana", compressible: true, extensions: ["osfpvg"] }, "application/vnd.yamaha.remote-setup": { source: "iana" }, "application/vnd.yamaha.smaf-audio": { source: "iana", extensions: ["saf"] }, "application/vnd.yamaha.smaf-phrase": { source: "iana", extensions: ["spf"] }, "application/vnd.yamaha.through-ngn": { source: "iana" }, "application/vnd.yamaha.tunnel-udpencap": { source: "iana" }, "application/vnd.yaoweme": { source: "iana" }, "application/vnd.yellowriver-custom-menu": { source: "iana", extensions: ["cmp"] }, "application/vnd.youtube.yt": { source: "iana" }, "application/vnd.zul": { source: "iana", extensions: ["zir", "zirz"] }, "application/vnd.zzazz.deck+xml": { source: "iana", compressible: true, extensions: ["zaz"] }, "application/voicexml+xml": { source: "iana", compressible: true, extensions: ["vxml"] }, "application/voucher-cms+json": { source: "iana", compressible: true }, "application/vq-rtcpxr": { source: "iana" }, "application/wasm": { source: "iana", compressible: true, extensions: ["wasm"] }, "application/watcherinfo+xml": { source: "iana", compressible: true, extensions: ["wif"] }, "application/webpush-options+json": { source: "iana", compressible: true }, "application/whoispp-query": { source: "iana" }, "application/whoispp-response": { source: "iana" }, "application/widget": { source: "iana", extensions: ["wgt"] }, "application/winhlp": { source: "apache", extensions: ["hlp"] }, "application/wita": { source: "iana" }, "application/wordperfect5.1": { source: "iana" }, "application/wsdl+xml": { source: "iana", compressible: true, extensions: ["wsdl"] }, "application/wspolicy+xml": { source: "iana", compressible: true, extensions: ["wspolicy"] }, "application/x-7z-compressed": { source: "apache", compressible: false, extensions: ["7z"] }, "application/x-abiword": { source: "apache", extensions: ["abw"] }, "application/x-ace-compressed": { source: "apache", extensions: ["ace"] }, "application/x-amf": { source: "apache" }, "application/x-apple-diskimage": { source: "apache", extensions: ["dmg"] }, "application/x-arj": { compressible: false, extensions: ["arj"] }, "application/x-authorware-bin": { source: "apache", extensions: ["aab", "x32", "u32", "vox"] }, "application/x-authorware-map": { source: "apache", extensions: ["aam"] }, "application/x-authorware-seg": { source: "apache", extensions: ["aas"] }, "application/x-bcpio": { source: "apache", extensions: ["bcpio"] }, "application/x-bdoc": { compressible: false, extensions: ["bdoc"] }, "application/x-bittorrent": { source: "apache", extensions: ["torrent"] }, "application/x-blorb": { source: "apache", extensions: ["blb", "blorb"] }, "application/x-bzip": { source: "apache", compressible: false, extensions: ["bz"] }, "application/x-bzip2": { source: "apache", compressible: false, extensions: ["bz2", "boz"] }, "application/x-cbr": { source: "apache", extensions: ["cbr", "cba", "cbt", "cbz", "cb7"] }, "application/x-cdlink": { source: "apache", extensions: ["vcd"] }, "application/x-cfs-compressed": { source: "apache", extensions: ["cfs"] }, "application/x-chat": { source: "apache", extensions: ["chat"] }, "application/x-chess-pgn": { source: "apache", extensions: ["pgn"] }, "application/x-chrome-extension": { extensions: ["crx"] }, "application/x-cocoa": { source: "nginx", extensions: ["cco"] }, "application/x-compress": { source: "apache" }, "application/x-conference": { source: "apache", extensions: ["nsc"] }, "application/x-cpio": { source: "apache", extensions: ["cpio"] }, "application/x-csh": { source: "apache", extensions: ["csh"] }, "application/x-deb": { compressible: false }, "application/x-debian-package": { source: "apache", extensions: ["deb", "udeb"] }, "application/x-dgc-compressed": { source: "apache", extensions: ["dgc"] }, "application/x-director": { source: "apache", extensions: ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"] }, "application/x-doom": { source: "apache", extensions: ["wad"] }, "application/x-dtbncx+xml": { source: "apache", compressible: true, extensions: ["ncx"] }, "application/x-dtbook+xml": { source: "apache", compressible: true, extensions: ["dtb"] }, "application/x-dtbresource+xml": { source: "apache", compressible: true, extensions: ["res"] }, "application/x-dvi": { source: "apache", compressible: false, extensions: ["dvi"] }, "application/x-envoy": { source: "apache", extensions: ["evy"] }, "application/x-eva": { source: "apache", extensions: ["eva"] }, "application/x-font-bdf": { source: "apache", extensions: ["bdf"] }, "application/x-font-dos": { source: "apache" }, "application/x-font-framemaker": { source: "apache" }, "application/x-font-ghostscript": { source: "apache", extensions: ["gsf"] }, "application/x-font-libgrx": { source: "apache" }, "application/x-font-linux-psf": { source: "apache", extensions: ["psf"] }, "application/x-font-pcf": { source: "apache", extensions: ["pcf"] }, "application/x-font-snf": { source: "apache", extensions: ["snf"] }, "application/x-font-speedo": { source: "apache" }, "application/x-font-sunos-news": { source: "apache" }, "application/x-font-type1": { source: "apache", extensions: ["pfa", "pfb", "pfm", "afm"] }, "application/x-font-vfont": { source: "apache" }, "application/x-freearc": { source: "apache", extensions: ["arc"] }, "application/x-futuresplash": { source: "apache", extensions: ["spl"] }, "application/x-gca-compressed": { source: "apache", extensions: ["gca"] }, "application/x-glulx": { source: "apache", extensions: ["ulx"] }, "application/x-gnumeric": { source: "apache", extensions: ["gnumeric"] }, "application/x-gramps-xml": { source: "apache", extensions: ["gramps"] }, "application/x-gtar": { source: "apache", extensions: ["gtar"] }, "application/x-gzip": { source: "apache" }, "application/x-hdf": { source: "apache", extensions: ["hdf"] }, "application/x-httpd-php": { compressible: true, extensions: ["php"] }, "application/x-install-instructions": { source: "apache", extensions: ["install"] }, "application/x-iso9660-image": { source: "apache", extensions: ["iso"] }, "application/x-iwork-keynote-sffkey": { extensions: ["key"] }, "application/x-iwork-numbers-sffnumbers": { extensions: ["numbers"] }, "application/x-iwork-pages-sffpages": { extensions: ["pages"] }, "application/x-java-archive-diff": { source: "nginx", extensions: ["jardiff"] }, "application/x-java-jnlp-file": { source: "apache", compressible: false, extensions: ["jnlp"] }, "application/x-javascript": { compressible: true }, "application/x-keepass2": { extensions: ["kdbx"] }, "application/x-latex": { source: "apache", compressible: false, extensions: ["latex"] }, "application/x-lua-bytecode": { extensions: ["luac"] }, "application/x-lzh-compressed": { source: "apache", extensions: ["lzh", "lha"] }, "application/x-makeself": { source: "nginx", extensions: ["run"] }, "application/x-mie": { source: "apache", extensions: ["mie"] }, "application/x-mobipocket-ebook": { source: "apache", extensions: ["prc", "mobi"] }, "application/x-mpegurl": { compressible: false }, "application/x-ms-application": { source: "apache", extensions: ["application"] }, "application/x-ms-shortcut": { source: "apache", extensions: ["lnk"] }, "application/x-ms-wmd": { source: "apache", extensions: ["wmd"] }, "application/x-ms-wmz": { source: "apache", extensions: ["wmz"] }, "application/x-ms-xbap": { source: "apache", extensions: ["xbap"] }, "application/x-msaccess": { source: "apache", extensions: ["mdb"] }, "application/x-msbinder": { source: "apache", extensions: ["obd"] }, "application/x-mscardfile": { source: "apache", extensions: ["crd"] }, "application/x-msclip": { source: "apache", extensions: ["clp"] }, "application/x-msdos-program": { extensions: ["exe"] }, "application/x-msdownload": { source: "apache", extensions: ["exe", "dll", "com", "bat", "msi"] }, "application/x-msmediaview": { source: "apache", extensions: ["mvb", "m13", "m14"] }, "application/x-msmetafile": { source: "apache", extensions: ["wmf", "wmz", "emf", "emz"] }, "application/x-msmoney": { source: "apache", extensions: ["mny"] }, "application/x-mspublisher": { source: "apache", extensions: ["pub"] }, "application/x-msschedule": { source: "apache", extensions: ["scd"] }, "application/x-msterminal": { source: "apache", extensions: ["trm"] }, "application/x-mswrite": { source: "apache", extensions: ["wri"] }, "application/x-netcdf": { source: "apache", extensions: ["nc", "cdf"] }, "application/x-ns-proxy-autoconfig": { compressible: true, extensions: ["pac"] }, "application/x-nzb": { source: "apache", extensions: ["nzb"] }, "application/x-perl": { source: "nginx", extensions: ["pl", "pm"] }, "application/x-pilot": { source: "nginx", extensions: ["prc", "pdb"] }, "application/x-pkcs12": { source: "apache", compressible: false, extensions: ["p12", "pfx"] }, "application/x-pkcs7-certificates": { source: "apache", extensions: ["p7b", "spc"] }, "application/x-pkcs7-certreqresp": { source: "apache", extensions: ["p7r"] }, "application/x-pki-message": { source: "iana" }, "application/x-rar-compressed": { source: "apache", compressible: false, extensions: ["rar"] }, "application/x-redhat-package-manager": { source: "nginx", extensions: ["rpm"] }, "application/x-research-info-systems": { source: "apache", extensions: ["ris"] }, "application/x-sea": { source: "nginx", extensions: ["sea"] }, "application/x-sh": { source: "apache", compressible: true, extensions: ["sh"] }, "application/x-shar": { source: "apache", extensions: ["shar"] }, "application/x-shockwave-flash": { source: "apache", compressible: false, extensions: ["swf"] }, "application/x-silverlight-app": { source: "apache", extensions: ["xap"] }, "application/x-sql": { source: "apache", extensions: ["sql"] }, "application/x-stuffit": { source: "apache", compressible: false, extensions: ["sit"] }, "application/x-stuffitx": { source: "apache", extensions: ["sitx"] }, "application/x-subrip": { source: "apache", extensions: ["srt"] }, "application/x-sv4cpio": { source: "apache", extensions: ["sv4cpio"] }, "application/x-sv4crc": { source: "apache", extensions: ["sv4crc"] }, "application/x-t3vm-image": { source: "apache", extensions: ["t3"] }, "application/x-tads": { source: "apache", extensions: ["gam"] }, "application/x-tar": { source: "apache", compressible: true, extensions: ["tar"] }, "application/x-tcl": { source: "apache", extensions: ["tcl", "tk"] }, "application/x-tex": { source: "apache", extensions: ["tex"] }, "application/x-tex-tfm": { source: "apache", extensions: ["tfm"] }, "application/x-texinfo": { source: "apache", extensions: ["texinfo", "texi"] }, "application/x-tgif": { source: "apache", extensions: ["obj"] }, "application/x-ustar": { source: "apache", extensions: ["ustar"] }, "application/x-virtualbox-hdd": { compressible: true, extensions: ["hdd"] }, "application/x-virtualbox-ova": { compressible: true, extensions: ["ova"] }, "application/x-virtualbox-ovf": { compressible: true, extensions: ["ovf"] }, "application/x-virtualbox-vbox": { compressible: true, extensions: ["vbox"] }, "application/x-virtualbox-vbox-extpack": { compressible: false, extensions: ["vbox-extpack"] }, "application/x-virtualbox-vdi": { compressible: true, extensions: ["vdi"] }, "application/x-virtualbox-vhd": { compressible: true, extensions: ["vhd"] }, "application/x-virtualbox-vmdk": { compressible: true, extensions: ["vmdk"] }, "application/x-wais-source": { source: "apache", extensions: ["src"] }, "application/x-web-app-manifest+json": { compressible: true, extensions: ["webapp"] }, "application/x-www-form-urlencoded": { source: "iana", compressible: true }, "application/x-x509-ca-cert": { source: "iana", extensions: ["der", "crt", "pem"] }, "application/x-x509-ca-ra-cert": { source: "iana" }, "application/x-x509-next-ca-cert": { source: "iana" }, "application/x-xfig": { source: "apache", extensions: ["fig"] }, "application/x-xliff+xml": { source: "apache", compressible: true, extensions: ["xlf"] }, "application/x-xpinstall": { source: "apache", compressible: false, extensions: ["xpi"] }, "application/x-xz": { source: "apache", extensions: ["xz"] }, "application/x-zmachine": { source: "apache", extensions: ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"] }, "application/x400-bp": { source: "iana" }, "application/xacml+xml": { source: "iana", compressible: true }, "application/xaml+xml": { source: "apache", compressible: true, extensions: ["xaml"] }, "application/xcap-att+xml": { source: "iana", compressible: true, extensions: ["xav"] }, "application/xcap-caps+xml": { source: "iana", compressible: true, extensions: ["xca"] }, "application/xcap-diff+xml": { source: "iana", compressible: true, extensions: ["xdf"] }, "application/xcap-el+xml": { source: "iana", compressible: true, extensions: ["xel"] }, "application/xcap-error+xml": { source: "iana", compressible: true }, "application/xcap-ns+xml": { source: "iana", compressible: true, extensions: ["xns"] }, "application/xcon-conference-info+xml": { source: "iana", compressible: true }, "application/xcon-conference-info-diff+xml": { source: "iana", compressible: true }, "application/xenc+xml": { source: "iana", compressible: true, extensions: ["xenc"] }, "application/xhtml+xml": { source: "iana", compressible: true, extensions: ["xhtml", "xht"] }, "application/xhtml-voice+xml": { source: "apache", compressible: true }, "application/xliff+xml": { source: "iana", compressible: true, extensions: ["xlf"] }, "application/xml": { source: "iana", compressible: true, extensions: ["xml", "xsl", "xsd", "rng"] }, "application/xml-dtd": { source: "iana", compressible: true, extensions: ["dtd"] }, "application/xml-external-parsed-entity": { source: "iana" }, "application/xml-patch+xml": { source: "iana", compressible: true }, "application/xmpp+xml": { source: "iana", compressible: true }, "application/xop+xml": { source: "iana", compressible: true, extensions: ["xop"] }, "application/xproc+xml": { source: "apache", compressible: true, extensions: ["xpl"] }, "application/xslt+xml": { source: "iana", compressible: true, extensions: ["xsl", "xslt"] }, "application/xspf+xml": { source: "apache", compressible: true, extensions: ["xspf"] }, "application/xv+xml": { source: "iana", compressible: true, extensions: ["mxml", "xhvml", "xvml", "xvm"] }, "application/yang": { source: "iana", extensions: ["yang"] }, "application/yang-data+json": { source: "iana", compressible: true }, "application/yang-data+xml": { source: "iana", compressible: true }, "application/yang-patch+json": { source: "iana", compressible: true }, "application/yang-patch+xml": { source: "iana", compressible: true }, "application/yin+xml": { source: "iana", compressible: true, extensions: ["yin"] }, "application/zip": { source: "iana", compressible: false, extensions: ["zip"] }, "application/zlib": { source: "iana" }, "application/zstd": { source: "iana" }, "audio/1d-interleaved-parityfec": { source: "iana" }, "audio/32kadpcm": { source: "iana" }, "audio/3gpp": { source: "iana", compressible: false, extensions: ["3gpp"] }, "audio/3gpp2": { source: "iana" }, "audio/aac": { source: "iana" }, "audio/ac3": { source: "iana" }, "audio/adpcm": { source: "apache", extensions: ["adp"] }, "audio/amr": { source: "iana", extensions: ["amr"] }, "audio/amr-wb": { source: "iana" }, "audio/amr-wb+": { source: "iana" }, "audio/aptx": { source: "iana" }, "audio/asc": { source: "iana" }, "audio/atrac-advanced-lossless": { source: "iana" }, "audio/atrac-x": { source: "iana" }, "audio/atrac3": { source: "iana" }, "audio/basic": { source: "iana", compressible: false, extensions: ["au", "snd"] }, "audio/bv16": { source: "iana" }, "audio/bv32": { source: "iana" }, "audio/clearmode": { source: "iana" }, "audio/cn": { source: "iana" }, "audio/dat12": { source: "iana" }, "audio/dls": { source: "iana" }, "audio/dsr-es201108": { source: "iana" }, "audio/dsr-es202050": { source: "iana" }, "audio/dsr-es202211": { source: "iana" }, "audio/dsr-es202212": { source: "iana" }, "audio/dv": { source: "iana" }, "audio/dvi4": { source: "iana" }, "audio/eac3": { source: "iana" }, "audio/encaprtp": { source: "iana" }, "audio/evrc": { source: "iana" }, "audio/evrc-qcp": { source: "iana" }, "audio/evrc0": { source: "iana" }, "audio/evrc1": { source: "iana" }, "audio/evrcb": { source: "iana" }, "audio/evrcb0": { source: "iana" }, "audio/evrcb1": { source: "iana" }, "audio/evrcnw": { source: "iana" }, "audio/evrcnw0": { source: "iana" }, "audio/evrcnw1": { source: "iana" }, "audio/evrcwb": { source: "iana" }, "audio/evrcwb0": { source: "iana" }, "audio/evrcwb1": { source: "iana" }, "audio/evs": { source: "iana" }, "audio/flexfec": { source: "iana" }, "audio/fwdred": { source: "iana" }, "audio/g711-0": { source: "iana" }, "audio/g719": { source: "iana" }, "audio/g722": { source: "iana" }, "audio/g7221": { source: "iana" }, "audio/g723": { source: "iana" }, "audio/g726-16": { source: "iana" }, "audio/g726-24": { source: "iana" }, "audio/g726-32": { source: "iana" }, "audio/g726-40": { source: "iana" }, "audio/g728": { source: "iana" }, "audio/g729": { source: "iana" }, "audio/g7291": { source: "iana" }, "audio/g729d": { source: "iana" }, "audio/g729e": { source: "iana" }, "audio/gsm": { source: "iana" }, "audio/gsm-efr": { source: "iana" }, "audio/gsm-hr-08": { source: "iana" }, "audio/ilbc": { source: "iana" }, "audio/ip-mr_v2.5": { source: "iana" }, "audio/isac": { source: "apache" }, "audio/l16": { source: "iana" }, "audio/l20": { source: "iana" }, "audio/l24": { source: "iana", compressible: false }, "audio/l8": { source: "iana" }, "audio/lpc": { source: "iana" }, "audio/melp": { source: "iana" }, "audio/melp1200": { source: "iana" }, "audio/melp2400": { source: "iana" }, "audio/melp600": { source: "iana" }, "audio/mhas": { source: "iana" }, "audio/midi": { source: "apache", extensions: ["mid", "midi", "kar", "rmi"] }, "audio/mobile-xmf": { source: "iana", extensions: ["mxmf"] }, "audio/mp3": { compressible: false, extensions: ["mp3"] }, "audio/mp4": { source: "iana", compressible: false, extensions: ["m4a", "mp4a"] }, "audio/mp4a-latm": { source: "iana" }, "audio/mpa": { source: "iana" }, "audio/mpa-robust": { source: "iana" }, "audio/mpeg": { source: "iana", compressible: false, extensions: ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"] }, "audio/mpeg4-generic": { source: "iana" }, "audio/musepack": { source: "apache" }, "audio/ogg": { source: "iana", compressible: false, extensions: ["oga", "ogg", "spx", "opus"] }, "audio/opus": { source: "iana" }, "audio/parityfec": { source: "iana" }, "audio/pcma": { source: "iana" }, "audio/pcma-wb": { source: "iana" }, "audio/pcmu": { source: "iana" }, "audio/pcmu-wb": { source: "iana" }, "audio/prs.sid": { source: "iana" }, "audio/qcelp": { source: "iana" }, "audio/raptorfec": { source: "iana" }, "audio/red": { source: "iana" }, "audio/rtp-enc-aescm128": { source: "iana" }, "audio/rtp-midi": { source: "iana" }, "audio/rtploopback": { source: "iana" }, "audio/rtx": { source: "iana" }, "audio/s3m": { source: "apache", extensions: ["s3m"] }, "audio/scip": { source: "iana" }, "audio/silk": { source: "apache", extensions: ["sil"] }, "audio/smv": { source: "iana" }, "audio/smv-qcp": { source: "iana" }, "audio/smv0": { source: "iana" }, "audio/sofa": { source: "iana" }, "audio/sp-midi": { source: "iana" }, "audio/speex": { source: "iana" }, "audio/t140c": { source: "iana" }, "audio/t38": { source: "iana" }, "audio/telephone-event": { source: "iana" }, "audio/tetra_acelp": { source: "iana" }, "audio/tetra_acelp_bb": { source: "iana" }, "audio/tone": { source: "iana" }, "audio/tsvcis": { source: "iana" }, "audio/uemclip": { source: "iana" }, "audio/ulpfec": { source: "iana" }, "audio/usac": { source: "iana" }, "audio/vdvi": { source: "iana" }, "audio/vmr-wb": { source: "iana" }, "audio/vnd.3gpp.iufp": { source: "iana" }, "audio/vnd.4sb": { source: "iana" }, "audio/vnd.audiokoz": { source: "iana" }, "audio/vnd.celp": { source: "iana" }, "audio/vnd.cisco.nse": { source: "iana" }, "audio/vnd.cmles.radio-events": { source: "iana" }, "audio/vnd.cns.anp1": { source: "iana" }, "audio/vnd.cns.inf1": { source: "iana" }, "audio/vnd.dece.audio": { source: "iana", extensions: ["uva", "uvva"] }, "audio/vnd.digital-winds": { source: "iana", extensions: ["eol"] }, "audio/vnd.dlna.adts": { source: "iana" }, "audio/vnd.dolby.heaac.1": { source: "iana" }, "audio/vnd.dolby.heaac.2": { source: "iana" }, "audio/vnd.dolby.mlp": { source: "iana" }, "audio/vnd.dolby.mps": { source: "iana" }, "audio/vnd.dolby.pl2": { source: "iana" }, "audio/vnd.dolby.pl2x": { source: "iana" }, "audio/vnd.dolby.pl2z": { source: "iana" }, "audio/vnd.dolby.pulse.1": { source: "iana" }, "audio/vnd.dra": { source: "iana", extensions: ["dra"] }, "audio/vnd.dts": { source: "iana", extensions: ["dts"] }, "audio/vnd.dts.hd": { source: "iana", extensions: ["dtshd"] }, "audio/vnd.dts.uhd": { source: "iana" }, "audio/vnd.dvb.file": { source: "iana" }, "audio/vnd.everad.plj": { source: "iana" }, "audio/vnd.hns.audio": { source: "iana" }, "audio/vnd.lucent.voice": { source: "iana", extensions: ["lvp"] }, "audio/vnd.ms-playready.media.pya": { source: "iana", extensions: ["pya"] }, "audio/vnd.nokia.mobile-xmf": { source: "iana" }, "audio/vnd.nortel.vbk": { source: "iana" }, "audio/vnd.nuera.ecelp4800": { source: "iana", extensions: ["ecelp4800"] }, "audio/vnd.nuera.ecelp7470": { source: "iana", extensions: ["ecelp7470"] }, "audio/vnd.nuera.ecelp9600": { source: "iana", extensions: ["ecelp9600"] }, "audio/vnd.octel.sbc": { source: "iana" }, "audio/vnd.presonus.multitrack": { source: "iana" }, "audio/vnd.qcelp": { source: "iana" }, "audio/vnd.rhetorex.32kadpcm": { source: "iana" }, "audio/vnd.rip": { source: "iana", extensions: ["rip"] }, "audio/vnd.rn-realaudio": { compressible: false }, "audio/vnd.sealedmedia.softseal.mpeg": { source: "iana" }, "audio/vnd.vmx.cvsd": { source: "iana" }, "audio/vnd.wave": { compressible: false }, "audio/vorbis": { source: "iana", compressible: false }, "audio/vorbis-config": { source: "iana" }, "audio/wav": { compressible: false, extensions: ["wav"] }, "audio/wave": { compressible: false, extensions: ["wav"] }, "audio/webm": { source: "apache", compressible: false, extensions: ["weba"] }, "audio/x-aac": { source: "apache", compressible: false, extensions: ["aac"] }, "audio/x-aiff": { source: "apache", extensions: ["aif", "aiff", "aifc"] }, "audio/x-caf": { source: "apache", compressible: false, extensions: ["caf"] }, "audio/x-flac": { source: "apache", extensions: ["flac"] }, "audio/x-m4a": { source: "nginx", extensions: ["m4a"] }, "audio/x-matroska": { source: "apache", extensions: ["mka"] }, "audio/x-mpegurl": { source: "apache", extensions: ["m3u"] }, "audio/x-ms-wax": { source: "apache", extensions: ["wax"] }, "audio/x-ms-wma": { source: "apache", extensions: ["wma"] }, "audio/x-pn-realaudio": { source: "apache", extensions: ["ram", "ra"] }, "audio/x-pn-realaudio-plugin": { source: "apache", extensions: ["rmp"] }, "audio/x-realaudio": { source: "nginx", extensions: ["ra"] }, "audio/x-tta": { source: "apache" }, "audio/x-wav": { source: "apache", extensions: ["wav"] }, "audio/xm": { source: "apache", extensions: ["xm"] }, "chemical/x-cdx": { source: "apache", extensions: ["cdx"] }, "chemical/x-cif": { source: "apache", extensions: ["cif"] }, "chemical/x-cmdf": { source: "apache", extensions: ["cmdf"] }, "chemical/x-cml": { source: "apache", extensions: ["cml"] }, "chemical/x-csml": { source: "apache", extensions: ["csml"] }, "chemical/x-pdb": { source: "apache" }, "chemical/x-xyz": { source: "apache", extensions: ["xyz"] }, "font/collection": { source: "iana", extensions: ["ttc"] }, "font/otf": { source: "iana", compressible: true, extensions: ["otf"] }, "font/sfnt": { source: "iana" }, "font/ttf": { source: "iana", compressible: true, extensions: ["ttf"] }, "font/woff": { source: "iana", extensions: ["woff"] }, "font/woff2": { source: "iana", extensions: ["woff2"] }, "image/aces": { source: "iana", extensions: ["exr"] }, "image/apng": { compressible: false, extensions: ["apng"] }, "image/avci": { source: "iana", extensions: ["avci"] }, "image/avcs": { source: "iana", extensions: ["avcs"] }, "image/avif": { source: "iana", compressible: false, extensions: ["avif"] }, "image/bmp": { source: "iana", compressible: true, extensions: ["bmp"] }, "image/cgm": { source: "iana", extensions: ["cgm"] }, "image/dicom-rle": { source: "iana", extensions: ["drle"] }, "image/emf": { source: "iana", extensions: ["emf"] }, "image/fits": { source: "iana", extensions: ["fits"] }, "image/g3fax": { source: "iana", extensions: ["g3"] }, "image/gif": { source: "iana", compressible: false, extensions: ["gif"] }, "image/heic": { source: "iana", extensions: ["heic"] }, "image/heic-sequence": { source: "iana", extensions: ["heics"] }, "image/heif": { source: "iana", extensions: ["heif"] }, "image/heif-sequence": { source: "iana", extensions: ["heifs"] }, "image/hej2k": { source: "iana", extensions: ["hej2"] }, "image/hsj2": { source: "iana", extensions: ["hsj2"] }, "image/ief": { source: "iana", extensions: ["ief"] }, "image/jls": { source: "iana", extensions: ["jls"] }, "image/jp2": { source: "iana", compressible: false, extensions: ["jp2", "jpg2"] }, "image/jpeg": { source: "iana", compressible: false, extensions: ["jpeg", "jpg", "jpe"] }, "image/jph": { source: "iana", extensions: ["jph"] }, "image/jphc": { source: "iana", extensions: ["jhc"] }, "image/jpm": { source: "iana", compressible: false, extensions: ["jpm"] }, "image/jpx": { source: "iana", compressible: false, extensions: ["jpx", "jpf"] }, "image/jxr": { source: "iana", extensions: ["jxr"] }, "image/jxra": { source: "iana", extensions: ["jxra"] }, "image/jxrs": { source: "iana", extensions: ["jxrs"] }, "image/jxs": { source: "iana", extensions: ["jxs"] }, "image/jxsc": { source: "iana", extensions: ["jxsc"] }, "image/jxsi": { source: "iana", extensions: ["jxsi"] }, "image/jxss": { source: "iana", extensions: ["jxss"] }, "image/ktx": { source: "iana", extensions: ["ktx"] }, "image/ktx2": { source: "iana", extensions: ["ktx2"] }, "image/naplps": { source: "iana" }, "image/pjpeg": { compressible: false }, "image/png": { source: "iana", compressible: false, extensions: ["png"] }, "image/prs.btif": { source: "iana", extensions: ["btif"] }, "image/prs.pti": { source: "iana", extensions: ["pti"] }, "image/pwg-raster": { source: "iana" }, "image/sgi": { source: "apache", extensions: ["sgi"] }, "image/svg+xml": { source: "iana", compressible: true, extensions: ["svg", "svgz"] }, "image/t38": { source: "iana", extensions: ["t38"] }, "image/tiff": { source: "iana", compressible: false, extensions: ["tif", "tiff"] }, "image/tiff-fx": { source: "iana", extensions: ["tfx"] }, "image/vnd.adobe.photoshop": { source: "iana", compressible: true, extensions: ["psd"] }, "image/vnd.airzip.accelerator.azv": { source: "iana", extensions: ["azv"] }, "image/vnd.cns.inf2": { source: "iana" }, "image/vnd.dece.graphic": { source: "iana", extensions: ["uvi", "uvvi", "uvg", "uvvg"] }, "image/vnd.djvu": { source: "iana", extensions: ["djvu", "djv"] }, "image/vnd.dvb.subtitle": { source: "iana", extensions: ["sub"] }, "image/vnd.dwg": { source: "iana", extensions: ["dwg"] }, "image/vnd.dxf": { source: "iana", extensions: ["dxf"] }, "image/vnd.fastbidsheet": { source: "iana", extensions: ["fbs"] }, "image/vnd.fpx": { source: "iana", extensions: ["fpx"] }, "image/vnd.fst": { source: "iana", extensions: ["fst"] }, "image/vnd.fujixerox.edmics-mmr": { source: "iana", extensions: ["mmr"] }, "image/vnd.fujixerox.edmics-rlc": { source: "iana", extensions: ["rlc"] }, "image/vnd.globalgraphics.pgb": { source: "iana" }, "image/vnd.microsoft.icon": { source: "iana", compressible: true, extensions: ["ico"] }, "image/vnd.mix": { source: "iana" }, "image/vnd.mozilla.apng": { source: "iana" }, "image/vnd.ms-dds": { compressible: true, extensions: ["dds"] }, "image/vnd.ms-modi": { source: "iana", extensions: ["mdi"] }, "image/vnd.ms-photo": { source: "apache", extensions: ["wdp"] }, "image/vnd.net-fpx": { source: "iana", extensions: ["npx"] }, "image/vnd.pco.b16": { source: "iana", extensions: ["b16"] }, "image/vnd.radiance": { source: "iana" }, "image/vnd.sealed.png": { source: "iana" }, "image/vnd.sealedmedia.softseal.gif": { source: "iana" }, "image/vnd.sealedmedia.softseal.jpg": { source: "iana" }, "image/vnd.svf": { source: "iana" }, "image/vnd.tencent.tap": { source: "iana", extensions: ["tap"] }, "image/vnd.valve.source.texture": { source: "iana", extensions: ["vtf"] }, "image/vnd.wap.wbmp": { source: "iana", extensions: ["wbmp"] }, "image/vnd.xiff": { source: "iana", extensions: ["xif"] }, "image/vnd.zbrush.pcx": { source: "iana", extensions: ["pcx"] }, "image/webp": { source: "apache", extensions: ["webp"] }, "image/wmf": { source: "iana", extensions: ["wmf"] }, "image/x-3ds": { source: "apache", extensions: ["3ds"] }, "image/x-cmu-raster": { source: "apache", extensions: ["ras"] }, "image/x-cmx": { source: "apache", extensions: ["cmx"] }, "image/x-freehand": { source: "apache", extensions: ["fh", "fhc", "fh4", "fh5", "fh7"] }, "image/x-icon": { source: "apache", compressible: true, extensions: ["ico"] }, "image/x-jng": { source: "nginx", extensions: ["jng"] }, "image/x-mrsid-image": { source: "apache", extensions: ["sid"] }, "image/x-ms-bmp": { source: "nginx", compressible: true, extensions: ["bmp"] }, "image/x-pcx": { source: "apache", extensions: ["pcx"] }, "image/x-pict": { source: "apache", extensions: ["pic", "pct"] }, "image/x-portable-anymap": { source: "apache", extensions: ["pnm"] }, "image/x-portable-bitmap": { source: "apache", extensions: ["pbm"] }, "image/x-portable-graymap": { source: "apache", extensions: ["pgm"] }, "image/x-portable-pixmap": { source: "apache", extensions: ["ppm"] }, "image/x-rgb": { source: "apache", extensions: ["rgb"] }, "image/x-tga": { source: "apache", extensions: ["tga"] }, "image/x-xbitmap": { source: "apache", extensions: ["xbm"] }, "image/x-xcf": { compressible: false }, "image/x-xpixmap": { source: "apache", extensions: ["xpm"] }, "image/x-xwindowdump": { source: "apache", extensions: ["xwd"] }, "message/cpim": { source: "iana" }, "message/delivery-status": { source: "iana" }, "message/disposition-notification": { source: "iana", extensions: ["disposition-notification"] }, "message/external-body": { source: "iana" }, "message/feedback-report": { source: "iana" }, "message/global": { source: "iana", extensions: ["u8msg"] }, "message/global-delivery-status": { source: "iana", extensions: ["u8dsn"] }, "message/global-disposition-notification": { source: "iana", extensions: ["u8mdn"] }, "message/global-headers": { source: "iana", extensions: ["u8hdr"] }, "message/http": { source: "iana", compressible: false }, "message/imdn+xml": { source: "iana", compressible: true }, "message/news": { source: "iana" }, "message/partial": { source: "iana", compressible: false }, "message/rfc822": { source: "iana", compressible: true, extensions: ["eml", "mime"] }, "message/s-http": { source: "iana" }, "message/sip": { source: "iana" }, "message/sipfrag": { source: "iana" }, "message/tracking-status": { source: "iana" }, "message/vnd.si.simp": { source: "iana" }, "message/vnd.wfa.wsc": { source: "iana", extensions: ["wsc"] }, "model/3mf": { source: "iana", extensions: ["3mf"] }, "model/e57": { source: "iana" }, "model/gltf+json": { source: "iana", compressible: true, extensions: ["gltf"] }, "model/gltf-binary": { source: "iana", compressible: true, extensions: ["glb"] }, "model/iges": { source: "iana", compressible: false, extensions: ["igs", "iges"] }, "model/mesh": { source: "iana", compressible: false, extensions: ["msh", "mesh", "silo"] }, "model/mtl": { source: "iana", extensions: ["mtl"] }, "model/obj": { source: "iana", extensions: ["obj"] }, "model/step": { source: "iana" }, "model/step+xml": { source: "iana", compressible: true, extensions: ["stpx"] }, "model/step+zip": { source: "iana", compressible: false, extensions: ["stpz"] }, "model/step-xml+zip": { source: "iana", compressible: false, extensions: ["stpxz"] }, "model/stl": { source: "iana", extensions: ["stl"] }, "model/vnd.collada+xml": { source: "iana", compressible: true, extensions: ["dae"] }, "model/vnd.dwf": { source: "iana", extensions: ["dwf"] }, "model/vnd.flatland.3dml": { source: "iana" }, "model/vnd.gdl": { source: "iana", extensions: ["gdl"] }, "model/vnd.gs-gdl": { source: "apache" }, "model/vnd.gs.gdl": { source: "iana" }, "model/vnd.gtw": { source: "iana", extensions: ["gtw"] }, "model/vnd.moml+xml": { source: "iana", compressible: true }, "model/vnd.mts": { source: "iana", extensions: ["mts"] }, "model/vnd.opengex": { source: "iana", extensions: ["ogex"] }, "model/vnd.parasolid.transmit.binary": { source: "iana", extensions: ["x_b"] }, "model/vnd.parasolid.transmit.text": { source: "iana", extensions: ["x_t"] }, "model/vnd.pytha.pyox": { source: "iana" }, "model/vnd.rosette.annotated-data-model": { source: "iana" }, "model/vnd.sap.vds": { source: "iana", extensions: ["vds"] }, "model/vnd.usdz+zip": { source: "iana", compressible: false, extensions: ["usdz"] }, "model/vnd.valve.source.compiled-map": { source: "iana", extensions: ["bsp"] }, "model/vnd.vtu": { source: "iana", extensions: ["vtu"] }, "model/vrml": { source: "iana", compressible: false, extensions: ["wrl", "vrml"] }, "model/x3d+binary": { source: "apache", compressible: false, extensions: ["x3db", "x3dbz"] }, "model/x3d+fastinfoset": { source: "iana", extensions: ["x3db"] }, "model/x3d+vrml": { source: "apache", compressible: false, extensions: ["x3dv", "x3dvz"] }, "model/x3d+xml": { source: "iana", compressible: true, extensions: ["x3d", "x3dz"] }, "model/x3d-vrml": { source: "iana", extensions: ["x3dv"] }, "multipart/alternative": { source: "iana", compressible: false }, "multipart/appledouble": { source: "iana" }, "multipart/byteranges": { source: "iana" }, "multipart/digest": { source: "iana" }, "multipart/encrypted": { source: "iana", compressible: false }, "multipart/form-data": { source: "iana", compressible: false }, "multipart/header-set": { source: "iana" }, "multipart/mixed": { source: "iana" }, "multipart/multilingual": { source: "iana" }, "multipart/parallel": { source: "iana" }, "multipart/related": { source: "iana", compressible: false }, "multipart/report": { source: "iana" }, "multipart/signed": { source: "iana", compressible: false }, "multipart/vnd.bint.med-plus": { source: "iana" }, "multipart/voice-message": { source: "iana" }, "multipart/x-mixed-replace": { source: "iana" }, "text/1d-interleaved-parityfec": { source: "iana" }, "text/cache-manifest": { source: "iana", compressible: true, extensions: ["appcache", "manifest"] }, "text/calendar": { source: "iana", extensions: ["ics", "ifb"] }, "text/calender": { compressible: true }, "text/cmd": { compressible: true }, "text/coffeescript": { extensions: ["coffee", "litcoffee"] }, "text/cql": { source: "iana" }, "text/cql-expression": { source: "iana" }, "text/cql-identifier": { source: "iana" }, "text/css": { source: "iana", charset: "UTF-8", compressible: true, extensions: ["css"] }, "text/csv": { source: "iana", compressible: true, extensions: ["csv"] }, "text/csv-schema": { source: "iana" }, "text/directory": { source: "iana" }, "text/dns": { source: "iana" }, "text/ecmascript": { source: "iana" }, "text/encaprtp": { source: "iana" }, "text/enriched": { source: "iana" }, "text/fhirpath": { source: "iana" }, "text/flexfec": { source: "iana" }, "text/fwdred": { source: "iana" }, "text/gff3": { source: "iana" }, "text/grammar-ref-list": { source: "iana" }, "text/html": { source: "iana", compressible: true, extensions: ["html", "htm", "shtml"] }, "text/jade": { extensions: ["jade"] }, "text/javascript": { source: "iana", compressible: true }, "text/jcr-cnd": { source: "iana" }, "text/jsx": { compressible: true, extensions: ["jsx"] }, "text/less": { compressible: true, extensions: ["less"] }, "text/markdown": { source: "iana", compressible: true, extensions: ["markdown", "md"] }, "text/mathml": { source: "nginx", extensions: ["mml"] }, "text/mdx": { compressible: true, extensions: ["mdx"] }, "text/mizar": { source: "iana" }, "text/n3": { source: "iana", charset: "UTF-8", compressible: true, extensions: ["n3"] }, "text/parameters": { source: "iana", charset: "UTF-8" }, "text/parityfec": { source: "iana" }, "text/plain": { source: "iana", compressible: true, extensions: ["txt", "text", "conf", "def", "list", "log", "in", "ini"] }, "text/provenance-notation": { source: "iana", charset: "UTF-8" }, "text/prs.fallenstein.rst": { source: "iana" }, "text/prs.lines.tag": { source: "iana", extensions: ["dsc"] }, "text/prs.prop.logic": { source: "iana" }, "text/raptorfec": { source: "iana" }, "text/red": { source: "iana" }, "text/rfc822-headers": { source: "iana" }, "text/richtext": { source: "iana", compressible: true, extensions: ["rtx"] }, "text/rtf": { source: "iana", compressible: true, extensions: ["rtf"] }, "text/rtp-enc-aescm128": { source: "iana" }, "text/rtploopback": { source: "iana" }, "text/rtx": { source: "iana" }, "text/sgml": { source: "iana", extensions: ["sgml", "sgm"] }, "text/shaclc": { source: "iana" }, "text/shex": { source: "iana", extensions: ["shex"] }, "text/slim": { extensions: ["slim", "slm"] }, "text/spdx": { source: "iana", extensions: ["spdx"] }, "text/strings": { source: "iana" }, "text/stylus": { extensions: ["stylus", "styl"] }, "text/t140": { source: "iana" }, "text/tab-separated-values": { source: "iana", compressible: true, extensions: ["tsv"] }, "text/troff": { source: "iana", extensions: ["t", "tr", "roff", "man", "me", "ms"] }, "text/turtle": { source: "iana", charset: "UTF-8", extensions: ["ttl"] }, "text/ulpfec": { source: "iana" }, "text/uri-list": { source: "iana", compressible: true, extensions: ["uri", "uris", "urls"] }, "text/vcard": { source: "iana", compressible: true, extensions: ["vcard"] }, "text/vnd.a": { source: "iana" }, "text/vnd.abc": { source: "iana" }, "text/vnd.ascii-art": { source: "iana" }, "text/vnd.curl": { source: "iana", extensions: ["curl"] }, "text/vnd.curl.dcurl": { source: "apache", extensions: ["dcurl"] }, "text/vnd.curl.mcurl": { source: "apache", extensions: ["mcurl"] }, "text/vnd.curl.scurl": { source: "apache", extensions: ["scurl"] }, "text/vnd.debian.copyright": { source: "iana", charset: "UTF-8" }, "text/vnd.dmclientscript": { source: "iana" }, "text/vnd.dvb.subtitle": { source: "iana", extensions: ["sub"] }, "text/vnd.esmertec.theme-descriptor": { source: "iana", charset: "UTF-8" }, "text/vnd.familysearch.gedcom": { source: "iana", extensions: ["ged"] }, "text/vnd.ficlab.flt": { source: "iana" }, "text/vnd.fly": { source: "iana", extensions: ["fly"] }, "text/vnd.fmi.flexstor": { source: "iana", extensions: ["flx"] }, "text/vnd.gml": { source: "iana" }, "text/vnd.graphviz": { source: "iana", extensions: ["gv"] }, "text/vnd.hans": { source: "iana" }, "text/vnd.hgl": { source: "iana" }, "text/vnd.in3d.3dml": { source: "iana", extensions: ["3dml"] }, "text/vnd.in3d.spot": { source: "iana", extensions: ["spot"] }, "text/vnd.iptc.newsml": { source: "iana" }, "text/vnd.iptc.nitf": { source: "iana" }, "text/vnd.latex-z": { source: "iana" }, "text/vnd.motorola.reflex": { source: "iana" }, "text/vnd.ms-mediapackage": { source: "iana" }, "text/vnd.net2phone.commcenter.command": { source: "iana" }, "text/vnd.radisys.msml-basic-layout": { source: "iana" }, "text/vnd.senx.warpscript": { source: "iana" }, "text/vnd.si.uricatalogue": { source: "iana" }, "text/vnd.sosi": { source: "iana" }, "text/vnd.sun.j2me.app-descriptor": { source: "iana", charset: "UTF-8", extensions: ["jad"] }, "text/vnd.trolltech.linguist": { source: "iana", charset: "UTF-8" }, "text/vnd.wap.si": { source: "iana" }, "text/vnd.wap.sl": { source: "iana" }, "text/vnd.wap.wml": { source: "iana", extensions: ["wml"] }, "text/vnd.wap.wmlscript": { source: "iana", extensions: ["wmls"] }, "text/vtt": { source: "iana", charset: "UTF-8", compressible: true, extensions: ["vtt"] }, "text/x-asm": { source: "apache", extensions: ["s", "asm"] }, "text/x-c": { source: "apache", extensions: ["c", "cc", "cxx", "cpp", "h", "hh", "dic"] }, "text/x-component": { source: "nginx", extensions: ["htc"] }, "text/x-fortran": { source: "apache", extensions: ["f", "for", "f77", "f90"] }, "text/x-gwt-rpc": { compressible: true }, "text/x-handlebars-template": { extensions: ["hbs"] }, "text/x-java-source": { source: "apache", extensions: ["java"] }, "text/x-jquery-tmpl": { compressible: true }, "text/x-lua": { extensions: ["lua"] }, "text/x-markdown": { compressible: true, extensions: ["mkd"] }, "text/x-nfo": { source: "apache", extensions: ["nfo"] }, "text/x-opml": { source: "apache", extensions: ["opml"] }, "text/x-org": { compressible: true, extensions: ["org"] }, "text/x-pascal": { source: "apache", extensions: ["p", "pas"] }, "text/x-processing": { compressible: true, extensions: ["pde"] }, "text/x-sass": { extensions: ["sass"] }, "text/x-scss": { extensions: ["scss"] }, "text/x-setext": { source: "apache", extensions: ["etx"] }, "text/x-sfv": { source: "apache", extensions: ["sfv"] }, "text/x-suse-ymp": { compressible: true, extensions: ["ymp"] }, "text/x-uuencode": { source: "apache", extensions: ["uu"] }, "text/x-vcalendar": { source: "apache", extensions: ["vcs"] }, "text/x-vcard": { source: "apache", extensions: ["vcf"] }, "text/xml": { source: "iana", compressible: true, extensions: ["xml"] }, "text/xml-external-parsed-entity": { source: "iana" }, "text/yaml": { compressible: true, extensions: ["yaml", "yml"] }, "video/1d-interleaved-parityfec": { source: "iana" }, "video/3gpp": { source: "iana", extensions: ["3gp", "3gpp"] }, "video/3gpp-tt": { source: "iana" }, "video/3gpp2": { source: "iana", extensions: ["3g2"] }, "video/av1": { source: "iana" }, "video/bmpeg": { source: "iana" }, "video/bt656": { source: "iana" }, "video/celb": { source: "iana" }, "video/dv": { source: "iana" }, "video/encaprtp": { source: "iana" }, "video/ffv1": { source: "iana" }, "video/flexfec": { source: "iana" }, "video/h261": { source: "iana", extensions: ["h261"] }, "video/h263": { source: "iana", extensions: ["h263"] }, "video/h263-1998": { source: "iana" }, "video/h263-2000": { source: "iana" }, "video/h264": { source: "iana", extensions: ["h264"] }, "video/h264-rcdo": { source: "iana" }, "video/h264-svc": { source: "iana" }, "video/h265": { source: "iana" }, "video/iso.segment": { source: "iana", extensions: ["m4s"] }, "video/jpeg": { source: "iana", extensions: ["jpgv"] }, "video/jpeg2000": { source: "iana" }, "video/jpm": { source: "apache", extensions: ["jpm", "jpgm"] }, "video/jxsv": { source: "iana" }, "video/mj2": { source: "iana", extensions: ["mj2", "mjp2"] }, "video/mp1s": { source: "iana" }, "video/mp2p": { source: "iana" }, "video/mp2t": { source: "iana", extensions: ["ts"] }, "video/mp4": { source: "iana", compressible: false, extensions: ["mp4", "mp4v", "mpg4"] }, "video/mp4v-es": { source: "iana" }, "video/mpeg": { source: "iana", compressible: false, extensions: ["mpeg", "mpg", "mpe", "m1v", "m2v"] }, "video/mpeg4-generic": { source: "iana" }, "video/mpv": { source: "iana" }, "video/nv": { source: "iana" }, "video/ogg": { source: "iana", compressible: false, extensions: ["ogv"] }, "video/parityfec": { source: "iana" }, "video/pointer": { source: "iana" }, "video/quicktime": { source: "iana", compressible: false, extensions: ["qt", "mov"] }, "video/raptorfec": { source: "iana" }, "video/raw": { source: "iana" }, "video/rtp-enc-aescm128": { source: "iana" }, "video/rtploopback": { source: "iana" }, "video/rtx": { source: "iana" }, "video/scip": { source: "iana" }, "video/smpte291": { source: "iana" }, "video/smpte292m": { source: "iana" }, "video/ulpfec": { source: "iana" }, "video/vc1": { source: "iana" }, "video/vc2": { source: "iana" }, "video/vnd.cctv": { source: "iana" }, "video/vnd.dece.hd": { source: "iana", extensions: ["uvh", "uvvh"] }, "video/vnd.dece.mobile": { source: "iana", extensions: ["uvm", "uvvm"] }, "video/vnd.dece.mp4": { source: "iana" }, "video/vnd.dece.pd": { source: "iana", extensions: ["uvp", "uvvp"] }, "video/vnd.dece.sd": { source: "iana", extensions: ["uvs", "uvvs"] }, "video/vnd.dece.video": { source: "iana", extensions: ["uvv", "uvvv"] }, "video/vnd.directv.mpeg": { source: "iana" }, "video/vnd.directv.mpeg-tts": { source: "iana" }, "video/vnd.dlna.mpeg-tts": { source: "iana" }, "video/vnd.dvb.file": { source: "iana", extensions: ["dvb"] }, "video/vnd.fvt": { source: "iana", extensions: ["fvt"] }, "video/vnd.hns.video": { source: "iana" }, "video/vnd.iptvforum.1dparityfec-1010": { source: "iana" }, "video/vnd.iptvforum.1dparityfec-2005": { source: "iana" }, "video/vnd.iptvforum.2dparityfec-1010": { source: "iana" }, "video/vnd.iptvforum.2dparityfec-2005": { source: "iana" }, "video/vnd.iptvforum.ttsavc": { source: "iana" }, "video/vnd.iptvforum.ttsmpeg2": { source: "iana" }, "video/vnd.motorola.video": { source: "iana" }, "video/vnd.motorola.videop": { source: "iana" }, "video/vnd.mpegurl": { source: "iana", extensions: ["mxu", "m4u"] }, "video/vnd.ms-playready.media.pyv": { source: "iana", extensions: ["pyv"] }, "video/vnd.nokia.interleaved-multimedia": { source: "iana" }, "video/vnd.nokia.mp4vr": { source: "iana" }, "video/vnd.nokia.videovoip": { source: "iana" }, "video/vnd.objectvideo": { source: "iana" }, "video/vnd.radgamettools.bink": { source: "iana" }, "video/vnd.radgamettools.smacker": { source: "iana" }, "video/vnd.sealed.mpeg1": { source: "iana" }, "video/vnd.sealed.mpeg4": { source: "iana" }, "video/vnd.sealed.swf": { source: "iana" }, "video/vnd.sealedmedia.softseal.mov": { source: "iana" }, "video/vnd.uvvu.mp4": { source: "iana", extensions: ["uvu", "uvvu"] }, "video/vnd.vivo": { source: "iana", extensions: ["viv"] }, "video/vnd.youtube.yt": { source: "iana" }, "video/vp8": { source: "iana" }, "video/vp9": { source: "iana" }, "video/webm": { source: "apache", compressible: false, extensions: ["webm"] }, "video/x-f4v": { source: "apache", extensions: ["f4v"] }, "video/x-fli": { source: "apache", extensions: ["fli"] }, "video/x-flv": { source: "apache", compressible: false, extensions: ["flv"] }, "video/x-m4v": { source: "apache", extensions: ["m4v"] }, "video/x-matroska": { source: "apache", compressible: false, extensions: ["mkv", "mk3d", "mks"] }, "video/x-mng": { source: "apache", extensions: ["mng"] }, "video/x-ms-asf": { source: "apache", extensions: ["asf", "asx"] }, "video/x-ms-vob": { source: "apache", extensions: ["vob"] }, "video/x-ms-wm": { source: "apache", extensions: ["wm"] }, "video/x-ms-wmv": { source: "apache", compressible: false, extensions: ["wmv"] }, "video/x-ms-wmx": { source: "apache", extensions: ["wmx"] }, "video/x-ms-wvx": { source: "apache", extensions: ["wvx"] }, "video/x-msvideo": { source: "apache", extensions: ["avi"] }, "video/x-sgi-movie": { source: "apache", extensions: ["movie"] }, "video/x-smv": { source: "apache", extensions: ["smv"] }, "x-conference/x-cooltalk": { source: "apache", extensions: ["ice"] }, "x-shader/x-fragment": { compressible: true }, "x-shader/x-vertex": { compressible: true } };
});
var Dn = Ra((Kr, En) => {
  /*!
   * mime-db
   * Copyright(c) 2014 Jonathan Ong
   * Copyright(c) 2015-2022 Douglas Christopher Wilson
   * MIT Licensed
   */
  En.exports = On();
});
var In = Ra((Gs) => {
  /*!
   * mime-types
   * Copyright(c) 2014 Jonathan Ong
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   */
  var Ea = Dn(), As = Ca("path").extname, Rn = /^\s*([^;\s]*)(?:;|\s|$)/, Ks = /^text\//i;
  Gs.charset = Cn;
  Gs.charsets = { lookup: Cn };
  Gs.contentType = Ts;
  Gs.extension = Fs;
  Gs.extensions = Object.create(null);
  Gs.lookup = Ls;
  Gs.types = Object.create(null);
  Vs(Gs.extensions, Gs.types);
  function Cn(a) {
    if (!a || typeof a !== "string")
      return false;
    var n = Rn.exec(a), i = n && Ea[n[1].toLowerCase()];
    if (i && i.charset)
      return i.charset;
    if (n && Ks.test(n[1]))
      return "UTF-8";
    return false;
  }
  function Ts(a) {
    if (!a || typeof a !== "string")
      return false;
    var n = a.indexOf("/") === -1 ? Gs.lookup(a) : a;
    if (!n)
      return false;
    if (n.indexOf("charset") === -1) {
      var i = Gs.charset(n);
      if (i)
        n += "; charset=" + i.toLowerCase();
    }
    return n;
  }
  function Fs(a) {
    if (!a || typeof a !== "string")
      return false;
    var n = Rn.exec(a), i = n && Gs.extensions[n[1].toLowerCase()];
    if (!i || !i.length)
      return false;
    return i[0];
  }
  function Ls(a) {
    if (!a || typeof a !== "string")
      return false;
    var n = As("x." + a).toLowerCase().substr(1);
    if (!n)
      return false;
    return Gs.types[n] || false;
  }
  function Vs(a, n) {
    var i = ["nginx", "apache", undefined, "iana"];
    Object.keys(Ea).forEach(function e(s) {
      var o = Ea[s], p = o.extensions;
      if (!p || !p.length)
        return;
      a[s] = p;
      for (var c = 0;c < p.length; c++) {
        var r = p[c];
        if (n[r]) {
          var t = i.indexOf(Ea[n[r]].source), l = i.indexOf(o.source);
          if (n[r] !== "application/octet-stream" && (t > l || t === l && n[r].substr(0, 12) === "application/"))
            continue;
        }
        n[r] = s;
      }
    });
  }
});
var ue = typeof Bun !== "undefined";
function Pa(a, n) {
  try {
    return le(n ?? Sa.resolve(process.cwd(), "src")).resolve(a, { paths: n ? [Sa.resolve(n.startsWith("file://") ? re(n) : n, "..")] : undefined });
  } catch (i) {
    if (!ue)
      throw i;
    return Bun.resolveSync(a, n ? Sa.dirname(n) : import.meta.dirname);
  }
}
var xe = typeof Bun === "undefined";
function aa(a, n, i) {
  try {
    let e = Pa(me.join(n, a));
    return ia(e, i);
  } catch (e) {
    return null;
  }
}
function ia(a, n = xe) {
  return n ? de(a).href : a;
}
async function T(a, n = ve.join(process.cwd(), "build")) {
  let i = aa(a, n);
  if (!i)
    return null;
  return await import(i);
}
function fe() {
  let a = Ia?.env ?? {};
  if (!a.FORCE_COLOR)
    return;
  if (a.FORCE_COLOR === "true" || a.FORCE_COLOR.length === 0)
    return true;
  if (a.FORCE_COLOR === "false")
    return false;
  return Math.min(Number.parseInt(a.FORCE_COLOR, 10), 3) > 0;
}
function Oi() {
  let a = Ia?.env ?? {}, n = fe();
  if (n !== undefined)
    return n;
  if (!_i.isatty(1) && !_i.isatty(2))
    return false;
  if (Ia.platform === "win32") {
    let i = be.release().split(".");
    return Number(i[0]) >= 10 && Number(i[2]) >= 10586;
  }
  return a.TERM !== "dumb";
}
var na = Oi();
var qa = (a) => na ? `\x1B[32m${a}\x1B[0m` : a;
var Ei = (a) => na ? `\x1B[33m${a}\x1B[0m` : a;
var Di = (a) => na ? `\x1B[31m${a}\x1B[0m` : a;
var pa = (a) => na ? `\x1B[34m${a}\x1B[0m` : a;
var Ri = (a) => na ? `\x1B[36m${a}\x1B[0m` : a;
var ta = (a) => na ? `\x1B[1m${a}\x1B[0m` : a;
var Ci = "0.2.3-canary.1";
function Si(a) {
  if (a === "node")
    return `Node.js ${process.version}`;
  if (a === "deno")
    return `Deno ${Deno.version.deno}`;
  return `Bun.js ${Bun.version}`;
}
function Pi() {
  if (typeof Bun !== "undefined")
    return "bun";
  if (typeof Deno !== "undefined")
    return "deno";
  return "node";
}
var he = /\\/g;
var Ii = "/_404";
var qi = "/_500";
var we = process.platform !== "darwin" && process.platform !== "win32";
var je = new Set(["static", "desktop", "android", "ios"]);
function an() {
  let a = process.argv[1] ?? "", { NODE_ENV: n } = process.env, i = L.join("brisa", "out", "cli"), e = Boolean(process.env.IS_PROD) || n === "production" || process.argv.some((b) => b === "PROD"), s = process.argv.some((b) => b === "DEV") || n === "development", o = Boolean(process.env.IS_SERVE_PROCESS) || Boolean(a.endsWith(L.join(i, "serve", "index.js"))), p = process.env.BRISA_ROOT_DIR ?? process.cwd(), c = Boolean(a.endsWith(L.join(i, "build.js"))), r = process.env.BRISA_DIR ?? a.replace(new RegExp(`${i.replace(he, "\\\\")}.*`), "brisa"), t = process.env.BRISA_SRC_DIR ?? L.resolve(p, "src"), l = process.env.BRISA_BUILD_FOLDER ?? L.resolve(p, "build");
  return { WORKSPACE: c ? t : l, JS_RUNTIME: Pi(), PAGE_404: Ii, PAGE_500: qi, VERSION: Ci, RESERVED_PAGES: [Ii, qi], IS_PRODUCTION: e, IS_DEVELOPMENT: s, IS_SERVE_PROCESS: o, IS_BUILD_PROCESS: c, PORT: Number.parseInt(process.argv[2]) || 3000, BUILD_DIR: l, ROOT_DIR: p, BRISA_DIR: r, SRC_DIR: t, ASSETS_DIR: L.resolve(l, "public"), PAGES_DIR: L.resolve(l, "pages"), LOG_PREFIX: { WAIT: Ri("[ wait ]") + " ", READY: qa("[ ready ] ") + " ", INFO: pa("[ info ] ") + " ", ERROR: Di("[ error ] ") + " ", WARN: Ei("[ warn ] ") + " ", TICK: qa("\u2713 ") + " " }, REGEX: { CATCH_ALL: /\[\[\.{3}.*?\]\]/g, DYNAMIC: /\[.*?\]/g, REST_DYNAMIC: /\[\.{3}.*?\]/g }, HEADERS: { CACHE_CONTROL: e ? "public, max-age=31536000, immutable" : "no-store, must-revalidate" } };
}
async function ai({ IS_PRODUCTION: a, BUILD_DIR: n, WORKSPACE: i, ROOT_DIR: e }) {
  let s = { trailingSlash: false, assetPrefix: "", basePath: "", extendPlugins: (v) => v, output: "bun", clustering: a && we, integrations: [], idleTimeout: 30 }, o = [...ye(), "lightningcss"], p = (await T("css-files", n))?.default ?? [], r = (await T("_integrations", L.resolve(n, "web-components")))?.webContextPlugins ?? [], t = (await T("i18n", i))?.default, l = { ...s, ...(await T("brisa.config", e))?.default ?? {} }, u = je.has(l?.output);
  if (t?.pages)
    t.pages = JSON.parse(JSON.stringify(t.pages, (v, d) => typeof d === "string" && d.length > 1 ? d.replace(/\/$/g, "") : d));
  let b = new Set(t?.locales || []);
  if (l.basePath && !l.basePath.startsWith(L.sep))
    l.basePath = L.sep + l.basePath;
  if (!l.external)
    l.external = o;
  else
    l.external = [...l.external, ...o];
  return globalThis.__BASE_PATH__ = l.basePath, { CSS_FILES: p, CONFIG: l, I18N_CONFIG: t, WEB_CONTEXT_PLUGINS: r, LOCALES_SET: b, IS_STATIC_EXPORT: u };
}
function ye() {
  let a = "/home/python/Developments/termoclima/package.json";
  if (!a)
    return [];
  let n = Ca(a);
  return Object.keys(n.devDependencies || {});
}
var ii = an();
var Wa = { ...ii, ...await ai(ii) };
var h = () => globalThis.mockConstants ? globalThis.mockConstants : Wa;
async function nn() {
  Wa = globalThis.mockConstants = { ...Wa, ...await ai(ii) };
}
var V = Wa;
var E = Symbol.for("current-provider-id");
var ra = Symbol.for("context");
function en({ context: a, value: n, store: i, webComponentSymbol: e }) {
  let s = Symbol("context-provider"), { contextStore: o, providerStore: p } = u(), c = new Set, r = p.get(E), t = false;
  function l(w, k) {
    w.set(a.id, k), i.set(ra, w);
  }
  function u() {
    let w = i.get(ra) ?? new Map, k = w.get(a.id) ?? new Map;
    return { contextStore: w, providerStore: k };
  }
  function b(w) {
    c.add(w);
  }
  function v(w) {
    return c.has(w);
  }
  function d() {
    return c.size > 0;
  }
  function x() {
    let { contextStore: w, providerStore: k } = u();
    k.delete(s), k.set(E, r), l(w, k);
  }
  function m() {
    let { contextStore: w, providerStore: k } = u();
    t = true, k.set(E, r), l(w, k);
  }
  function j() {
    let { contextStore: w, providerStore: k } = u();
    t = false, r = k.get(E), k.set(E, s), l(w, k);
  }
  function J() {
    return t;
  }
  let g = { value: n, clearProvider: x, pauseProvider: m, restoreProvider: j, isProviderPaused: J, addSlot: b, hasSlot: v, hasSomeSlot: d, webComponentSymbol: e };
  return p.set(s, g), p.set(E, s), l(o, p), g;
}
function sn(a, n) {
  let i = n.store.get(ra) ?? new Map;
  for (let e of i.values()) {
    let s = e.get(E);
    if (!s)
      continue;
    e.get(s)?.addSlot(a);
  }
}
function on(a, n) {
  let i = a.store.get(ra) ?? new Map;
  for (let e of i.values())
    for (let s of e.values()) {
      if (!s || typeof s === "symbol")
        continue;
      n(s, e);
    }
}
function cn(a, n) {
  let i = [];
  return on(n, (e) => {
    if (e.isProviderPaused() && e.hasSlot(a))
      e.restoreProvider(), i.push(e);
  }), i;
}
function pn(a, n) {
  on(n, (i, e) => {
    if (i.webComponentSymbol === a) {
      if (i.clearProvider(), e.size === 1)
        e.clear();
    }
  });
}
var la = (a) => a.replace(/\s*\n\s*/g, "");
var ke = Symbol.for("isJSX");
function ua(a) {
  return Array.isArray(a) && ((ke in a) || ze(a));
}
function ze(a) {
  return a?.[0] === "HTML" && typeof a[1]?.html === "string";
}
function ma(a) {
  return Object.assign(["HTML", { html: a }, null], { [Symbol.for("isJSX")]: true });
}
var ni = Symbol.for("isJSX");
function Ja(a) {
  return U(null, a);
}
function U(a, { children: n, ...i }, e) {
  let s = n;
  if (Array.isArray(n) && !$e(n))
    s = n.map((o) => o?.[ni] ? o : Ja({ children: o }));
  return Object.assign([a, { ...i, key: e }, s], { [ni]: true });
}
function $e(a) {
  return Array.isArray(a) && ((ni in a) || Je(a));
}
function Je(a) {
  return a?.[0] === "HTML" && typeof a[1]?.html === "string";
}
var tn = Symbol.for("AVOID_DECLARATIVE_SHADOW_DOM");
var Qe = `

Please use the 'renderPage' / 'renderComponent' function inside a server action without using a try-catch block
because is a throwable caught by Brisa to rerender the component or page.

More details: ${pa("https://brisa.build/api-reference/server-apis/renderPage")}`;
var W = { INITIAL_REQUEST: "INITIAL_REQUEST", SPA_NAVIGATION: "SPA_NAVIGATION", SERVER_ACTION: "SERVER_ACTION", API_REQUEST: "API_REQUEST" };
var rn = new Set(["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected", "data-action"]);
var mn = () => ["aes-256-cbc", Buffer.from(ln.env.__CRYPTO_KEY__ ?? "", "hex"), ln.env.__CRYPTO_IV__ ?? ""];
var Qa = "__encrypted:";
var Ma = "__encrypted-notext:";
function ei(a) {
  if (a == null)
    return a;
  let n = un.createCipheriv(...mn()), i = a, e = Qa;
  if (typeof a !== "string")
    i = JSON.stringify(a), e = Ma;
  return e + n.update(i, "utf8", "hex") + n.final("hex");
}
function si(a) {
  let n = a.startsWith(Qa), i = un.createDecipheriv(...mn()), e = a.replace(Qa, "").replace(Ma, ""), s = i.update(e, "hex", "utf8") + i.final("utf8");
  return n ? s : JSON.parse(s);
}
var oi = "__BRISA_ERRORS__";
function dn(a) {
  let { LOG_PREFIX: n } = h(), i = n[{ Error: "ERROR", Warning: "WARN" }[a]];
  return (e, s, o) => {
    if (console.log(i, `Ops! ${a}:`), console.log(i, "--------------------------"), e.forEach((p, c) => console.log(i, c === 0 ? ta(p) : p)), console.log(i, "--------------------------"), s)
      console.log(i, s);
    if (o)
      console.log(i, o);
  };
}
function B({ messages: a, req: n, stack: i, docTitle: e, docLink: s }) {
  let o;
  if (n) {
    let p = { title: a[0], details: a.slice(1), stack: i, docTitle: e, docLink: s }, c = n.store.get(oi) || [];
    c.push(p), n.store.set(oi, c), n.store.transferToClient([oi]);
  }
  if (s)
    o = `${e ?? "Documentation"}: ${s}`;
  return dn("Error")(a, o, i);
}
function xn(a, n) {
  return dn("Warning")(a, n);
}
async function Za(a) {
  let n = a.headers.get("content-type"), i = a.clone(), e = a.method === "POST" && !a.bodyUsed, s = n?.includes("multipart/form-data"), o = s && e ? await a.formData() : null, p = new Set, c = !s && e ? await i.json().catch(() => null) : null, r = o ? JSON.parse(o.get("x-s")?.toString() ?? "[]") : c?.["x-s"];
  if (o)
    o.delete("x-s");
  return { formData: o, body: c, transferClientStoreToServer() {
    if (!r)
      return;
    for (let [t, l] of r)
      try {
        let u = l, b = false;
        if (t == null || t?.startsWith("context:"))
          continue;
        if (typeof l === "string" && (l.startsWith(Qa) || l.startsWith(Ma)))
          p.add(t), u = si(l), b = true;
        a.store.set(t, u), a.store.transferToClient([t], { encrypt: b });
      } catch (u) {
        B({ messages: [`Error transferring client "${t}" store to server store`, u.message], docTitle: "Documentation about store.transferToClient", docLink: "https://brisa.build/api-reference/components/request-context#transfertoclient", req: a });
      }
  } };
}
function ci(a) {
  let n = new Map, i = a.webStore;
  for (let e of i.keys()) {
    let s = i.get(e)?.encrypt ?? false, o = a.store.get(e);
    n.set(e, s ? ei(o) : o);
  }
  return n;
}
function Ya(a) {
  return JSON.stringify([...ci(a)]);
}
var Ze = (a, n) => `<template id="U:${n}">${a}</template><script id="R:${n}">u$('${n}')</script>`;
function pi({ controller: a, head: n, applySuspense: i = true, request: e }) {
  let s = new Set, o = [], p = [], c = [], r = Promise.withResolvers(), t = new Map, l = [], u = (d) => t.get(d) ?? { chunk: "", openTags: 0, closeTags: 0 }, b = false, v;
  return { head: n, styleSheetsChunks: l, hasHeadTag: false, insideHeadTag: false, hasUnsuspense: false, hasActionRPC: false, areSignalsInjected: e.method === "POST", applySuspense: i, generateComponentId() {
    if (!v)
      v = Ye();
    o.push((v++).toString(36));
  }, getComponentId() {
    return o.at(-1) ?? "";
  }, getParentComponentId() {
    return o.at(-2) ?? "";
  }, removeComponentId() {
    o.pop();
  }, setCurrentWebComponentSymbol(d) {
    if (d)
      p.push(d);
    else
      p.pop();
  }, getCurrentWebComponentSymbol() {
    return p.at(-1);
  }, addId(d) {
    s.add(d);
  }, transferStoreToClient(d) {
    let x = ci(e), m = this.areSignalsInjected;
    if (x.size === 0)
      return;
    let j = JSON.stringify([...x]), J = e.initiator === W.SPA_NAVIGATION || e.initiator === W.SERVER_ACTION, g;
    if (J)
      g = `<script type="application/json" id="S">${j}</script>`;
    else if (m && b)
      g = `<script>for(let [k, v] of ${j}){ _s?.set?.(k, v); _S.push([k, v])}</script>`;
    else if (m && !b)
      g = `<script>window._S=${j};for(let [k, v] of _S) _s?.set?.(k, v)</script>`;
    else if (b && !m)
      g = `<script>for(let e of ${j}) _S.push(e)</script>`;
    else
      g = `<script id="init-S">window._S=${j}</script>`;
    this.enqueue(g, d), e.webStore.clear(), b = true;
  }, hasId(d) {
    return s.has(d);
  }, startTag(d, x) {
    if (!x) {
      if (d)
        a.enqueue(d);
      return;
    }
    let m = u(x);
    m.openTags++, m.chunk += d ?? "", t.set(x, m);
  }, enqueue(d, x) {
    if (!x)
      return a.enqueue(d);
    let m = u(x);
    return m.chunk += d, t.set(x, m);
  }, async endTag(d, x) {
    if (!x) {
      let j = d === "</html>";
      if (j)
        this.transferStoreToClient();
      if (d)
        a.enqueue(d);
      if (j)
        await this.waitSuspensedPromises();
      return;
    }
    let m = u(x);
    m.closeTags++, m.chunk += d ?? "", t.set(x, m);
  }, flushAndUnsupenseAllReady() {
    for (let [d, x] of t.entries()) {
      if (x.closeTags !== x.openTags)
        continue;
      a.enqueue(Ze(x.chunk, d)), t.delete(d);
    }
  }, suspensePromise(d) {
    c.push(Promise.all([r.promise, d]).then(() => this.flushAndUnsupenseAllReady()));
  }, async waitSuspensedPromises() {
    if (c.length === 0)
      return;
    r.resolve(), await Promise.all(c);
  }, nextSuspenseIndex() {
    return c.length + 1;
  } };
}
function Ye() {
  let a = new Date, n = new Date(a.getFullYear(), a.getMonth(), 1);
  return a.getTime() - n.getTime();
}
function ea(a) {
  return vn(a, (n, i) => `${i}${n}`);
}
function ti(a) {
  return vn(a, (n, i) => n.replace(i, ""));
}
function vn(a, n) {
  let { CONFIG: i } = h(), e = i.basePath || "", s;
  if (!e)
    return a;
  if (URL.canParse(a)) {
    let o = new URL(a);
    o.pathname = n(o.pathname, e), s = o.toString();
  } else
    s = n(a, e);
  if (!a.endsWith("/") && s.endsWith("/"))
    return s.slice(0, -1);
  return s;
}
var { REGEX: Ha } = V;
function sa(a, n) {
  let i = new URL(n, "http://localhost"), e = i.search + i.hash;
  if (!a.match(Ha.DYNAMIC)?.length)
    return a + e;
  let s = i.pathname.split("/");
  return a.split("/").map((c, r) => {
    let t = Ha.CATCH_ALL.test(c), l = Ha.REST_DYNAMIC.test(c), u = Ha.DYNAMIC.test(c);
    if (!t && !l && !u)
      return c;
    let b = s[r];
    if (!b)
      return c;
    if (t || l)
      return s.slice(r).join("/");
    return b;
  }).join("/") + e;
}
function ri(a) {
  let { locale: n } = a.i18n ?? {}, { I18N_CONFIG: i, RESERVED_PAGES: e, CONFIG: s } = h(), { locales: o, hrefLangOrigin: p } = i ?? {}, c = a.route?.name || "";
  if (!n || !p || e.includes(c))
    return "";
  return o.map((r) => {
    if (r === n)
      return "";
    let t = Ue(r);
    if (!t)
      return "";
    let u = Be(t, r, a).toString().replace(/\/$/, ""), b = ea(`${u}${s.trailingSlash ? "/" : ""}`);
    return `<link rel="alternate" hreflang="${r}" href="${b}" />`;
  }).join("");
}
function Ue(a) {
  let { I18N_CONFIG: n, IS_PRODUCTION: i } = h(), { hrefLangOrigin: e } = n ?? {}, s = typeof e === "string" ? e : e?.[a];
  if (!s)
    return "";
  if (s && !URL.canParse(s)) {
    if (!i)
      console.warn(`hrefLangOrigin for ${a} is not a valid URL. Please check that has protocol and domain.`);
    return "";
  }
  return s;
}
function Be(a, n, i) {
  let { I18N_CONFIG: e, LOCALES_SET: s } = h(), o = new URL(i.finalURL).pathname.split("/"), p = s.has(o[1]) ? o.join("/").slice(3) : o.join("/"), c = new URL(p, a), { pages: r = {} } = e ?? {}, t = i.route?.name || "", l = r[t]?.[n] || t, u = sa(l, p);
  return c.pathname = `/${n}${u}`, c;
}
function da(a, n) {
  let { REGEX: i } = h(), e = ".*", s = a.replace(i.CATCH_ALL, ".*").replace(i.REST_DYNAMIC, ".*").replace(i.DYNAMIC, '[^\\/:*?"<>|]+');
  return new RegExp(`^${s}$`).test(n);
}
function bn(a) {
  return typeof a !== "object" ? a : JSON.stringify(a, (n, i) => i === undefined ? "_|U|_" : i);
}
function fn(a) {
  if (!a)
    return a;
  try {
    return JSON.parse(a, (n, i) => i === "_|U|_" ? undefined : i);
  } catch (n) {
    return a;
  }
}
function Aa(a) {
  return bn(a).replace(/'/g, "\\u0027");
}
var Xe = (a) => a.toLowerCase();
function li(a) {
  let n = "";
  for (let i in a) {
    let e = Xe(i.replace(/([A-Z])/g, "-$1"));
    n += `${e}:${a[i]};`;
  }
  return n;
}
function We(a) {
  return typeof a === "function" && "actionId" in a;
}
var xa = We;
var Me = new Set(["children", "__isWebComponent", "__skipGlobalCSS"]);
var He = new Set(["function", "undefined"]);
var ui = "http://localhost";
function mi({ elementProps: a, request: n, type: i, componentProps: e, componentID: s }) {
  let { IS_PRODUCTION: o, CONFIG: p } = h(), c = n.i18n?.locale, { basePath: r, assetPrefix: t } = p, l = new Set, u = "", b = a["data-action-onsubmit"];
  for (let d in a) {
    let x = d.toLowerCase(), m = a[d];
    if (l.has(x))
      continue;
    if (m !== undefined)
      l.add(x);
    if (Me.has(d) || c && i === "html" && d === "lang")
      continue;
    if (d === "src" && (t || r) && !URL.canParse(m))
      m = `${t ? t : r}${m}`;
    let j = typeof m === "function";
    if (!o && j && !x.startsWith("on"))
      xn([`The prop "${d}" is a function and it's not an event handler.`, 'It should start with "on" to be considered an event handler', `Example: ${ta("on" + d[0].toUpperCase() + d.slice(1))}`], "Event handlers docs: https://brisa.build/building-your-application/components-details/web-components#events");
    if (j && globalThis.REGISTERED_ACTIONS && !xa(m))
      m.actionId = globalThis.REGISTERED_ACTIONS.push(m) - 1;
    if (xa(m)) {
      let g = `data-action-${x}`, w = u.replace(new RegExp(`${g}=".*?"`), `${g}="${m.actionId}"`);
      if (x === "onsubmit")
        b = m.actionId;
      if (l.has(g))
        u = w;
      else
        l.add(g), u += ` ${g}="${m.actionId}"`;
      if (!l.has("data-action"))
        l.add("data-action"), u += " data-action";
      continue;
    }
    if (x === "indicator") {
      let J = Array.isArray(m) ? m : [m];
      u += ` ${x}='${Aa(J.map((g) => g.id))}'`;
      continue;
    }
    if (x.startsWith("indicate") && m?.id?.startsWith("__ind:"))
      m = m.id;
    if (He.has(typeof m))
      continue;
    if (typeof m === "boolean" && rn.has(x)) {
      if (m)
        u += ` ${x}`;
      continue;
    }
    if (typeof m === "object") {
      u += ` ${x}='${m && x === "style" ? li(m) : Aa(m)}'`;
      continue;
    }
    if (d === "href" && typeof m === "string" && (i === "a" || i === "link" && a.rel === "prefetch")) {
      u += ` ${x}="${Ae(m, n)}"`;
      continue;
    }
    u += ` ${x}="${m}"`;
  }
  let v = l.has("data-action");
  if (v && s) {
    if (!n._actionIndex)
      n._actionIndex = 0;
    if (u += ` data-cid="${s}"`, !l.has("key"))
      u += ` key="${s}:${++n._actionIndex}"`;
  }
  if (v && e) {
    let d = [], x = [];
    for (let [J, g] of Object.entries(e)) {
      if (!xa(g))
        continue;
      if (g.cid)
        d.push([J, g.actionId, g.cid]);
      if (x.length === 0 && g.actions?.length)
        x = g.actions.slice();
    }
    let m = d.length > 0, j = m || x.length > 0;
    if (m)
      x.unshift(d);
    if (j)
      u += ` data-actions='${Aa(x)}'`;
  }
  if (b && i === "form") {
    if (!l.has("action")) {
      let d = new URL(n.url);
      d.searchParams.set("_aid", b), l.add("action"), u += ` action="${d.pathname}${d.search}"`;
    }
    if (!l.has("enctype"))
      l.add("enctype"), u += ' enctype="multipart/form-data"';
    if (!l.has("method"))
      l.add("method"), u += ' method="POST"';
  }
  if (c && i === "html") {
    let d = new Intl.Locale(c), { direction: x } = d.textInfo ?? d.getTextInfo();
    u += ` lang="${c}" dir="${x}"`;
  }
  if (i === "head" && r)
    u += ` basepath="${r}"`;
  return u;
}
function Ae(a, n) {
  let { I18N_CONFIG: i } = h(), { pages: e } = i ?? {}, { locale: s, locales: o } = n.i18n ?? {}, p = URL.canParse(a), c = a.replace(/\/$/, "");
  for (let [u, b] of Object.entries(n.route?.params ?? {}))
    c = c.replace(`[${u}]`, b);
  if (p)
    return a;
  if (!s)
    return gn(ea(a));
  let r = Ke(e, c);
  if (r) {
    let [u, b] = r, v = b?.[s] ?? u;
    c = sa(v, c);
  }
  if (c && c[0] !== "/")
    c = "/" + c;
  let t = !o?.some((u) => c?.split("/")?.[1] === u), l = gn(t ? `/${s}${c}` : c);
  return ea(l);
}
function Ke(a, n) {
  let e = new URL(n, ui).pathname.replace(/\/$/, "");
  for (let s of Object.entries(a ?? {}))
    if (da(s[0], e))
      return s;
}
function gn(a) {
  let { CONFIG: n } = h();
  if (!n.trailingSlash)
    return a;
  let i = new URL(a, ui);
  return i.pathname = i.pathname.endsWith("/") ? i.pathname : `${i.pathname}/`, i.toString().replace(ui, "");
}
function va(a) {
  return a instanceof Error && a.name === "NotFoundError";
}
function Ka(a, n) {
  for (let i in n) {
    if (!a.hasOwnProperty(i))
      continue;
    a[i] = typeof a[i] === "object" ? Ka(a[i], n[i]) : n[i];
  }
  return a;
}
var hn = "data-action";
function di(a, n, i) {
  let e = {}, s;
  for (let o in a) {
    let p = o.toLowerCase(), c = `${hn}-${p}`, r = a[o];
    if (typeof r === "function" && c in a && !("actionId" in r)) {
      if (!s)
        s = Te(n, i?.getParentComponentId());
      Object.assign(r, { actionId: a[c], actions: s, cid: i?.getComponentId() });
    }
    if (p.startsWith(hn))
      continue;
    e[o] = r;
  }
  return e;
}
function Te(a, n = "") {
  let i = [], e;
  for (let s in a) {
    let o = a[s];
    if (xa(o)) {
      if (i.push([s, o.actionId, n]), !e && Array.isArray(o.actions) && o.actions.length > 0)
        e = o.actions;
    }
  }
  return i.length ? [i, ...e ?? []] : [];
}
function ba(a) {
  return a instanceof Error && a.name.startsWith("navigate:");
}
function xi(a) {
  return a.name.replace("navigate:", "");
}
function vi(a) {
  return `<script>(()=>{let u=new URL(location.href);u.searchParams.set("_not-found","1"),location.${a?.initiator === "SERVER_ACTION" ? "assign" : "replace"}(u.toString())})()</script>`;
}
var Fe = /["&'<>]/g;
var Le = { '"': "&quot;", "&": "&amp;", "'": "&#x27;", "<": "&lt;", ">": "&gt;" };
var Ve = (a) => Le[a];
function Ua(a) {
  return String(a).replace(Fe, Ve);
}
var jn = /(\\|\/)+/g;
var yn = "|";
async function Ta(a, n) {
  let { BUILD_DIR: i } = h(), e = wn.existsSync(a) ? wn.readFileSync(a, "utf-8") : "";
  if (!e)
    return false;
  let s = (n.route?.filePath ?? "").replace(i, "").replace(jn, yn), o = e.split(`
`);
  for (let p = 0;p < o.length; p += 1)
    if (o[p].replace(jn, yn) === s)
      return true;
  return false;
}
var kn = "context-provider";
var $n = new Set(["string", "number"]);
var Ge = '<meta name="robots" content="noindex" />';
function ga(a, { request: n, head: i, isPage: e = true, applySuspense: s = globalThis.FORCE_SUSPENSE_DEFAULT ?? true }) {
  let o = D({ originalRequest: n }), { IS_PRODUCTION: p, BUILD_DIR: c } = h(), r = fa.join(c, "pages-client"), t = fa.join(r, "_unsuspense.txt"), l = fa.join(r, "_rpc.txt"), u = false;
  return new ReadableStream({ async start(b) {
    let v = pi({ controller: b, head: i, applySuspense: s, request: o }), d = new Promise((m) => o.signal.addEventListener("abort", () => {
      u = true, m(u);
    }));
    v.hasUnsuspense = await Ta(t, o), v.hasActionRPC = await Ta(l, o);
    let x = Va(a, o, v).then(() => v.waitSuspensedPromises()).then(() => v.transferStoreToClient()).catch(async (m) => {
      if (va(m))
        v.enqueue(Ge), v.transferStoreToClient(), v.enqueue(vi(o));
      else if (ba(m)) {
        let j = o.initiator === W.SERVER_ACTION ? "assign" : "replace";
        v.transferStoreToClient(), v.enqueue(`<script>window._xm="${xi(m)}";location.${j}("${m.message}")</script>`);
      } else
        b.error(m);
    });
    if (await Promise.race([d, x]), b.close(), await Promise.all(o._tasks.map((m) => m())), e && !p && !u && !v.hasHeadTag)
      B({ messages: ["No <head> tag", "You should have a <head> tag in your document. Please review your layout. You can experiment some issues with client JavaScript code without it."], docTitle: "Documentation about layout", docLink: "https://brisa.build/building-your-application/routing/pages-and-layouts.html#layout" });
  } });
}
async function Va(a, n, i, e, s = false, o) {
  let p = await Promise.resolve().then(() => a), c = Array.isArray(p) ? p : [p];
  if (ua(c))
    c = [c];
  let { BUILD_DIR: r, VERSION: t, CONFIG: l, IS_DEVELOPMENT: u, IS_SERVE_PROCESS: b } = h(), d = (l.basePath || "") + "/_brisa/pages";
  for (let x of c) {
    if (x === false || x == null)
      continue;
    if ($n.has(typeof x)) {
      i.enqueue(Ua(x.toString()), e);
      continue;
    }
    if (typeof x === "object" && !ua(x)) {
      i.enqueue(String(x), e);
      continue;
    }
    let [m, j, J] = x, g = { ...j, children: J }, w = m === kn && g.serverOnly, k = m === null, A = k || w, F = g?.["ssr-Component"] || g?.__isWebComponent, Q = typeof m === "string", H = F && Q, f, $ = s, X, K = typeof g?.slot === "string" && s && (Q || F || k);
    if (H)
      $ = true, X = Symbol("web-component"), i.setCurrentWebComponentSymbol(X);
    else if (Q)
      $ = false;
    if (m === "HTML") {
      i.enqueue(g.html, e);
      continue;
    }
    if (m === "slot")
      sn(g.name ?? "", n);
    if (K)
      f = cn(g.slot, n);
    let y = () => {
      if (H && X)
        return pn(X, n), i.setCurrentWebComponentSymbol();
      if (!K || !f?.length)
        return;
      for (let z of f)
        z.pauseProvider();
    };
    if (fi(m) && !A) {
      let z = m?._hasActions, N = di(g, o, i), q = { component: m, props: N };
      if (i.applySuspense && fi(m.suspense)) {
        let R = i.nextSuspenseIndex();
        return i.startTag(`<div id="S:${R}">`, e), await La({ component: m.suspense, props: N }, n, i, e, $), await i.endTag("</div>", e), i.suspensePromise(La(q, n, i, R, $));
      }
      if (z)
        i.generateComponentId(), i.enqueue(`<!--o:${i.getComponentId()}-->`, e);
      let _ = await La(q, n, i, e, $);
      if (z)
        i.enqueue(`<!--c:${i.getComponentId()}-->`, e), i.removeComponentId();
      return y(), _;
    }
    if (i.insideHeadTag && i.hasId(g.id))
      return;
    if (i.insideHeadTag && g.id)
      i.addId(g.id);
    let Z = mi({ elementProps: g, request: n, type: m, componentProps: o, componentID: i.getComponentId() }), G = m === kn, M;
    if (G)
      M = en({ context: g.context, value: g.value, store: n.store, webComponentSymbol: i.getCurrentWebComponentSymbol() });
    if (i.startTag(A ? null : `<${m}${Z}>`, e), m === "head") {
      if (_e(i, e), i.insideHeadTag = true, i.head)
        await La({ component: i.head, props: {} }, n, i, e, $);
    } else if (m === "template" && g.shadowrootmode === "open" && !g.__skipGlobalCSS) {
      let z = n._globalStyle;
      if (z)
        i.enqueue(`<style>${la(z)}</style>`, e);
      i.enqueue(i.styleSheetsChunks.join(""), e);
    }
    if (await bi(J, n, i, e, $, o), m === "head") {
      if (i.enqueue(ri(n), e), i.hasHeadTag = true, i.insideHeadTag = false, i.hasUnsuspense)
        i.enqueue(`<script src="${d}/_unsuspense-${t}.js"></script>`, e);
      if (i.hasActionRPC)
        i.enqueue(`<script src="${d}/_rpc-${t}.js" async></script>`, e);
    } else if (m === "link" && g.rel === "stylesheet" && i.insideHeadTag)
      i.styleSheetsChunks.push(`<link rel="stylesheet" href="${g.href}"></link>`);
    else if (m === "body") {
      if (u && b)
        i.enqueue("<brisa-error-dialog skipSSR></brisa-error-dialog>", e);
      let z = n.route?.filePath?.replace(fa.sep + "pages", fa.sep + "pages-client")?.replace(".js", ".txt");
      if (i.transferStoreToClient(e), Fa.existsSync(z)) {
        let N = Fa.readFileSync(z, "utf8"), q = n.route.src.replace(".js", `-${N}.js`), { locale: Y } = n.i18n, _ = JSON.stringify({ name: n.route?.name, pathname: n.route?.pathname, query: n.route?.query, params: n.route?.params });
        if (Y) {
          let R = q.replace(".js", `-${Y}.js`), $a = fa.join(r, "pages-client", R);
          if (Fa.existsSync($a)) {
            let Gi = `<script src="${d}/${R}"></script>`;
            if (n.store.has("_messages")) {
              let ne = Fa.readFileSync($a, "utf-8").replace(/^window.i18nMessages ?=/, "return ");
              Gi = `<script>window.i18nMessages={...window.i18nMessages,...(${JSON.stringify(Ka(new Function(ne)(), n.store.get("_messages")))})}</script>`;
            }
            i.enqueue(Gi, e);
          }
        }
        i.areSignalsInjected = true, i.enqueue(`<script>window.r=${_}</script>`, e), i.enqueue(`<script async fetchpriority="high" src="${d}/${q}"></script>`, e);
      }
    }
    if (M)
      if (M.hasSomeSlot())
        M.pauseProvider();
      else
        M.clearProvider();
    y(), await i.endTag(A ? null : `</${m}>`, e);
  }
}
async function La({ component: a, props: n }, i, e, s, o = false) {
  let p = await Ne(a, n, i);
  if (zn(e, i, s), typeof p?.next === "function") {
    for await (let c of p)
      zn(e, i, s), await bi(c, i, e, s, o, n);
    return;
  }
  if ($n.has(typeof p))
    return e.enqueue(Ua(p.toString()), s);
  if (Array.isArray(p) && !ua(p))
    return bi(p, i, e, s, o, n);
  return Va(p, i, e, s, o, n);
}
async function bi(a, n, i, e, s = false, o) {
  if (a === false || a == null)
    return;
  if (Array.isArray(a) && !ua(a))
    await Jn(a, n, i, e, s, o);
  else if (typeof a === "object")
    await Va(a, n, i, e, s, o);
  else if (typeof a?.toString === "function")
    await i.enqueue(Ua(a.toString()), e);
}
async function Jn(a, n, i, e, s = false, o) {
  for (let p of a)
    if (Array.isArray(p) && !ua(p))
      await Jn(p, n, i, e, s, o);
    else
      await Va(p, n, i, e, s, o);
}
function fi(a) {
  return typeof a === "function";
}
function Ne(a, n, i) {
  return Promise.resolve().then(() => a(n, i) ?? "").catch((e) => {
    if (va(e) || ba(e))
      throw e;
    if (!fi(a.error)) {
      let s = n["ssr-selector"], p = `Error in SSR on '${n["ssr-selector"] || a.name || "Component"}' ${s ? "web" : "server"} component with props ${JSON.stringify(n)}`;
      return B({ req: i, messages: [p, e.code, e.message ?? e.toString()].filter(Boolean), stack: e.stack, docTitle: "Documentation about SSR", docLink: s ? "https://brisa.build/building-your-application/components-details/web-components.html#server-side-rendering" : "https://brisa.build/building-your-application/components-details/server-components.html" }), "";
    }
    return a.error({ error: e, ...n }, i);
  });
}
function _e(a, n) {
  let { CONFIG: i, CSS_FILES: e } = h(), s = (i.basePath || "").replace(/\/$/, "");
  if (!e?.length)
    return;
  for (let o of e) {
    let p = `${s}/${o}`;
    a.enqueue(`<link rel="preload" href="${p}" as="style"></link>
       <link rel="stylesheet" href="${p}"></link>
      `, n);
  }
}
function zn(a, n, i) {
  if (n._style)
    a.enqueue(`<style>${la(n._style)}</style>`, i), n._style = "";
}
var { LOG_PREFIX: Ga, SRC_DIR: Qn, IS_DEVELOPMENT: Ee, IS_SERVE_PROCESS: De } = V;
var Re = "__brisa_live_reload__";
var Yn = "reload";
function Zn() {
  return Number(ha.hrtime.bigint());
}
async function Ce() {
  let a = null;
  async function n(e, s) {
    try {
      if (s.split(hi.sep)[0] === "public")
        return;
      let o = hi.join(Qn, s);
      if (!gi.existsSync(o))
        return;
      if (e !== "change" && gi.statSync(o).size !== 0)
        return;
      console.log(Ga.WAIT, `recompiling ${s}...`), i(s);
    } catch (o) {
      B({ messages: [o.message, `Error while trying to recompile ${s}`], stack: o.stack, docTitle: "Please, file a GitHub issue to Brisa's team", docLink: "https://github.com/brisa-build/brisa/issues/new" });
    }
  }
  async function i(e) {
    if (typeof Bun !== "undefined")
      globalThis.Loader.registry.clear();
    a?.kill?.();
    let s = Zn();
    a = Oe.spawn(ha.execPath, [hi.join(ha.argv[1], "..", "..", "build.js")], { env: Object.assign(ha.env, { QUIET_MODE: "true" }), stdio: ["inherit", "inherit", "pipe"] }), a.on("error", (o) => {
      console.log(Ga.ERROR, `failed to recompile ${e}`, o.toString());
    }), a.on("exit", async (o) => {
      if (o !== 0)
        return;
      let c = ((Zn() - s) / 1e6).toFixed(2);
      if (console.log(Ga.READY, `recompiled ${e} in ${c}ms`), !globalThis.brisaServer)
        return;
      await nn(), globalThis.brisaServer.publish("hot-reload", Yn);
    });
  }
  if (globalThis.watcher)
    globalThis.watcher.close();
  else
    console.log(Ga.INFO, "hot reloading enabled");
  return globalThis.watcher = gi.watch(Qn, { recursive: true }, n), ha.on("SIGINT", () => {
    globalThis.watcher?.close(), ha.exit(0);
  }), i;
}
if (Ee && De)
  Ce();
function Un({ port: a, children: n }) {
  let e = `ws://localhost:${globalThis.brisaServer?.port ?? a}/${Re}`;
  return U(Ja, { children: [U("script", { id: "hotreloading-script", children: ma(la(`(()=>{
            let s;
            let tries = 0;

            function wsc() {
              tries++;
              if(tries > 10) return;
              if(s) s.close();
              s = new WebSocket("${e}");
              s.onmessage = e => {
                if(e.data === "${Yn}"){
                  window._xm = "native";
                  location.reload();
                }
              };
              s.onopen = () => { tries = 0 };
              s.onclose = wsc;
              s.onerror = () => s.close();
            }
            wsc();
          })();`)) }, undefined, false, undefined, this), n] }, undefined, true, undefined, this);
}
async function wi({ children: a, layoutModule: n }) {
  if (!n)
    return U("html", { children: [U("head", { children: [U("meta", { charSet: "UTF-8" }, undefined, false, undefined, this), U("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }, undefined, false, undefined, this), U("meta", { name: "theme-color", content: "#317EFB" }, undefined, false, undefined, this), U("title", { children: "Brisa" }, undefined, false, undefined, this)] }, undefined, true, undefined, this), U("body", { children: a }, undefined, false, undefined, this)] }, undefined, true, undefined, this);
  let i = n.default;
  return U(i, { children: a }, undefined, false, undefined, this);
}
var ji = new Map;
async function yi(a, n) {
  let { BUILD_DIR: i, IS_PRODUCTION: e } = h();
  if (e && ji.has(a.filePath))
    return ji.get(a.filePath);
  let s = await import(ia(a.filePath)), o = aa("layout", i), p = o ? await import(o) : undefined, c = s.default, t = { Page: () => U(Ja, { children: [ma("<!DOCTYPE html>"), U(Se, { layoutModule: p, children: U(c, { error: n }, undefined, false, undefined, this) }, undefined, false, undefined, this)] }, undefined, true, undefined, this), module: s, layoutModule: p };
  return ji.set(a.filePath, t), t;
}
function Se({ children: a, layoutModule: n }) {
  let { IS_PRODUCTION: i, PORT: e } = h();
  return U(wi, { layoutModule: n, children: i ? a : U(Un, { port: e, children: a }, undefined, false, undefined, this) }, undefined, false, undefined, this);
}
var { HEADERS: Pe, BUILD_DIR: Ie } = h();
var qe = await T("middleware", Ie);
async function Na({ req: a, route: n, error: i, status: e = 200, headers: s }) {
  let { Page: o, module: p, layoutModule: c } = await yi(n, i), r = qe?.responseHeaders?.(a, e) ?? {}, t = c?.responseHeaders?.(a, e) ?? {}, l = await p.responseHeaders?.(a, e) ?? {}, u = new Headers({ "cache-control": Pe.CACHE_CONTROL, ...r, ...t, ...l, ...s, "transfer-encoding": "chunked", vary: "Accept-Encoding", "content-type": "text/html; charset=utf-8" });
  return { PageComponent: o, pageModule: p, pageHeaders: u };
}
var is = typeof Bun !== "undefined";
function wa(a, n = is) {
  if (!Bn.existsSync(a))
    return null;
  if (n)
    return Bun.file(a).stream();
  let i = Bn.createReadStream(a);
  return new ReadableStream({ start(e) {
    as(i, async function* (s) {
      for await (let o of s)
        e.enqueue(o);
      e.close();
    }, (s) => {
      if (s)
        e.error(s);
    });
  } });
}
async function ja({ req: a, route: n, status: i = 200, error: e, headers: s = {} }) {
  let { transferClientStoreToServer: o } = await Za(a), { PageComponent: p, pageModule: c, pageHeaders: r } = await Na({ req: a, route: n, error: e, status: i, headers: s });
  if (a.initiator !== W.SERVER_ACTION)
    o();
  let l = wa(ns(n)) ?? ga(p(), { request: a, head: c.Head }), u = { headers: r, status: i };
  return new Response(l.pipeThrough(new TextEncoderStream), u);
}
function ns(a) {
  let { BUILD_DIR: n, CONFIG: i } = h(), { pathname: e } = new URL(a.pathname, "http://localhost"), s = e === "/";
  return Xn.join(n, "prerendered-pages", i.trailingSlash ? `${e}${Xn.sep}index.html` : `${s ? "index" : e}.html`);
}
var es = new RegExp("(?:\\.test|_test|\\.spec|_spec)$");
var ss = new RegExp("(?:\\.test|_test|\\.spec|_spec)\\.(js|jsx|ts|tsx|cjs|mjs)$");
function Ba(a, n = false) {
  if (!a)
    return false;
  return (n ? ss : es).test(a);
}
var cs = /[\\|/]+index$/;
var ps = [".tsx", ".jsx", ".ts", ".mjs", ".cjs", ".js"];
var ts = /(?<!:)\/{2,}/g;
var rs = /\/$/;
var ls = /\[|\]|\./g;
var us = /\\/g;
var Wn = /\d+/;
var Mn = new Set(["[", "_", "@", "$", "~", "%", "^", "&", "*", "(", "+", "="]);
function ki(a) {
  let n = Object.entries(vs(a)).sort(bs);
  function i(e) {
    let s = new URL(e.replace(ts, "/"), "http://l"), o = decodeURIComponent(s.pathname + s.search + s.hash), p = decodeURIComponent(s.pathname.replace(rs, "") || "/").trim();
    for (let [c, r] of n) {
      let t = ds(c), l = r.replace(a.dir + An.sep, "");
      if (t === "exact" && c === p)
        return { filePath: r, kind: t, name: c, pathname: o, src: l, ...Hn(c, p, s) };
      if (t === "dynamic" || t === "catch-all" || t === "optional-catch-all") {
        let u = c.split("/"), b = p.split("/");
        for (let v = 0;v < u.length; v++) {
          let d = u[v];
          if (d.startsWith("["))
            b[v] = u[v];
          if (d.includes("...")) {
            b.splice(v, b.length), u.splice(v, u.length);
            break;
          }
        }
        if (u.join("/") === b.join("/"))
          return { filePath: r, kind: t, name: c, pathname: o, src: l, ...Hn(c, p, s) };
      }
    }
    return null;
  }
  return { routes: n, match: i };
}
function ms(a, n, i) {
  return a.replace(i, "").replace(n, "").replace(cs, "").replace(us, "/");
}
function ds(a) {
  if (a.includes("[[..."))
    return "optional-catch-all";
  if (a.includes("[..."))
    return "catch-all";
  if (a.includes("["))
    return "dynamic";
  return "exact";
}
function xs(a) {
  let n = {};
  for (let i of a.searchParams.keys())
    if (n[i] = a.searchParams.getAll(i), n[i].length === 1)
      n[i] = n[i][0];
  return n;
}
function Hn(a, n, i) {
  let e = a.split("/"), s = n.split("/"), o = e.reduce((c, r, t) => {
    if (r.startsWith("[")) {
      let l = r.replace(ls, "");
      c[l] = r.includes("...") ? s.slice(t) ?? "" : s[t] ?? "";
    }
    return c;
  }, {}), p = { ...o, ...xs(i) };
  return { params: o, query: p };
}
function vs({ dir: a, fileExtensions: n = ps }) {
  let i = {}, e = os.readdirSync(a, { withFileTypes: true, recursive: true });
  for (let s of e) {
    if (s.isDirectory() || Ba(s.name, true))
      continue;
    let o = n.find((r) => s.name.endsWith(r));
    if (!o)
      continue;
    let p = An.resolve(s.parentPath, s.name), c = ms(p, a, o);
    if (c === "")
      c = "/";
    i[c] = p;
  }
  return i;
}
function bs([a], [n]) {
  let i = a.split("/"), e = n.split("/"), s = Math.min(i.length, e.length);
  for (let o = 0;o < s; o++) {
    let p = i[o], c = e[o], r = Mn.has(p[0]), t = Mn.has(c[0]), l = Number.parseInt("" + p.match(Wn), 10), u = Number.parseInt("" + c.match(Wn), 10);
    if (!isNaN(l) && !isNaN(u)) {
      let v = l - u;
      if (v !== 0)
        return v;
    }
    if (r && !t)
      return 1;
    if (!r && t)
      return -1;
    let b = p.localeCompare(c, "en", { sensitivity: "base" });
    if (b !== 0)
      return b;
  }
  return i.length - e.length;
}
function C(a, n = [], i) {
  let e = ki({ dir: a }), s = new Set(n), o = (c) => {
    let r = new URL(c.finalURL);
    if (i)
      r.pathname = r.pathname.replace(new RegExp(`/${i}(/|$)`), "");
    let t = e.match(r.toString());
    if (Ba(t?.name) || r.pathname.endsWith(fs.sep + "index"))
      return { route: null, isReservedPathname: false };
    return { route: t, isReservedPathname: s.has(t?.pathname ?? "") };
  }, p = n.reduce((c, r) => {
    return c[r] = e.match(r), c;
  }, {});
  return { match: o, reservedRoutes: p };
}
function zi(a) {
  if (a.i18n?.locale)
    return a.i18n.locale;
  let { I18N_CONFIG: n = {}, LOCALES_SET: i } = h(), { pathname: e } = new URL(a.finalURL), [, s] = e.split("/");
  if (i.has(s))
    return s;
  let o = gs(a);
  if (o && i.has(o))
    return o;
  let p = hs(a), c = js(p, i);
  return c ? c : ws(a, n);
}
function gs(a) {
  return a.headers.get("Cookie")?.match(/BRISA_LOCALE=(?<locale>\w+)/)?.groups?.locale;
}
function hs(a) {
  return a.headers.get("Accept-Language")?.split(",").map((i) => i.split(";")[0]);
}
function ws(a, n) {
  let i = new URL(a.finalURL).hostname;
  return n.domains?.[i]?.defaultLocale ?? n.defaultLocale;
}
function js(a = [], n) {
  for (let i of a) {
    if (n.has(i))
      return i;
    let [e] = i.split("-");
    if (n.has(e))
      return e;
  }
}
var ys = /<(\w+) *>(.*?)<\/\1 *>|<(\w+) *\/>/;
var ks = { [Symbol.for("isJSX")]: true };
var Kn = (a) => Object.assign([null, {}, a], ks);
var zs = /(?:\r\n|\r|\n)/g;
function Tn(a) {
  if (!a.length)
    return [];
  let [n, i, e, s] = a.slice(0, 4);
  return [[n || e, i || "", s]].concat(Tn(a.slice(4, a.length)));
}
function _a(a, n = []) {
  let i = a.replace(zs, "").split(ys);
  if (i.length === 1)
    return a;
  let e = [], s = (c) => e.push(Kn(c)), o = i.shift();
  if (o)
    s(o);
  let p = Tn(i);
  for (let [c, r, t] of p) {
    let l = n[c] || Kn(c);
    if (l[2] = r ? _a(r, n) : r, s(l), t)
      s(t);
  }
  return e;
}
function $i(a, n) {
  let { allowEmptyStrings: i = true } = n, e = new Intl.PluralRules(a), s = (c, r) => {
    if (Array.isArray(c))
      return c.map((t) => s(t, r));
    if (c instanceof Object)
      return Ln({ obj: c, query: r, config: n, locale: a });
    return Fn({ text: c, query: r, config: n, locale: a });
  }, o = (c = "", r, t) => {
    let l = n._messages || {}, u = { ...n.messages?.[a] || {}, ...l }, b = $s(e, u, c, n, r), v = Xa(u, b, n, t), d = typeof v === "object" ? JSON.parse(JSON.stringify(v)) : v, x = typeof d === "undefined" || typeof d === "object" && !Object.keys(d).length || d === "" && !i, m = typeof t?.fallback === "string" ? [t.fallback] : t?.fallback || [];
    if (x && Array.isArray(m) && m.length) {
      let [j, ...J] = m;
      if (typeof j === "string")
        return p(j, r, { ...t, fallback: J });
    }
    if (x && t && t.hasOwnProperty("default") && !m?.length)
      return t.default ? s(t.default, r) : t.default;
    if (x)
      return c;
    return s(d, r);
  }, p = (c = "", r, t) => {
    let l = o(c, r, t);
    return t?.elements ? _a(l, t.elements) : l;
  };
  return p;
}
function Xa(a, n = "", i, e = { returnObjects: false }) {
  let { keySeparator: s = "." } = i || {}, o = s ? n.split(s) : [n];
  if (n === s && e.returnObjects)
    return a;
  let p = o.reduce((c, r) => {
    if (typeof c === "string")
      return {};
    let t = c[r];
    return t || (typeof t === "string" ? t : {});
  }, a);
  if (typeof p === "string" || p instanceof Object && e.returnObjects)
    return p;
  return;
}
function $s(a, n, i, e, s) {
  if (!s || typeof s.count !== "number")
    return i;
  let o = `${i}_${s.count}`;
  if (Xa(n, o, e) !== undefined)
    return o;
  let p = `${i}_${a.select(s.count)}`;
  if (Xa(n, p, e) !== undefined)
    return p;
  let c = `${i}.${s.count}`;
  if (Xa(n, c, e) !== undefined)
    return c;
  let r = `${i}.${a.select(s.count)}`;
  if (Xa(n, r, e) !== undefined)
    return r;
  return i;
}
function Fn({ text: a, query: n, config: i, locale: e }) {
  if (!a || !n)
    return a || "";
  let s = (t) => t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), { format: o = null, prefix: p = "{{", suffix: c = "}}" } = i.interpolation || {}, r = c === "" ? "" : `(?:[\\s,]+([\\w-]*))?\\s*${s(c)}`;
  return Object.keys(n).reduce((t, l) => {
    let u = new RegExp(`${s(p)}\\s*${l}${r}`, "gm");
    return t.replace(u, (b, v) => {
      return v && o ? o(n[l], v, e) : n[l];
    });
  }, a);
}
function Ln({ obj: a, query: n, config: i, locale: e }) {
  if (!n || Object.keys(n).length === 0)
    return a;
  return Object.keys(a).forEach((s) => {
    if (a[s] instanceof Object)
      Ln({ obj: a[s], query: n, config: i, locale: e });
    if (typeof a[s] === "string")
      a[s] = Fn({ text: a[s], query: n, config: i, locale: e });
  }), a;
}
var Js = /\/$/;
function Ji(a, n) {
  let e = Object.entries(a ?? {}).flatMap(Qs), s = Object.fromEntries(e);
  return { match: (p) => {
    let c = new URL(p.finalURL), r = p.i18n?.locale, t = (l) => D({ originalRequest: p, finalURL: l });
    c.pathname = c.pathname.replace(`/${r}`, "").replace(Js, "");
    for (let l in s) {
      let { route: u, locale: b } = s[l];
      if (b !== r)
        continue;
      if (r && a?.[u]?.[r] && l !== u && da(u, c.pathname))
        return { route: null, isReservedPathname: false };
      if (da(l, c.pathname))
        return c.pathname = sa(u, c.pathname), n.match(t(c.toString()));
    }
    return n.match(t(c.toString()));
  }, reservedRoutes: n.reservedRoutes };
}
function Qs([a, n]) {
  return Object.entries(n ?? {}).map(([i, e]) => [e, { locale: i, route: a }]);
}
function Qi(a) {
  let { ASSETS_DIR: n } = h(), i = new URL(a.finalURL), e = Zs.join(n, i.pathname);
  return i.pathname !== "/" && Vn.existsSync(e);
}
function ya(a) {
  let { CONFIG: n } = h(), { trailingSlash: i } = n, e = new URL(a.finalURL), { pathname: s } = e, o = s === "/";
  if (i && !s.endsWith("/") && !o)
    return oa(Gn(s + "/", e).toString());
  if (!i && s.endsWith("/") && !o)
    return oa(Gn(s.slice(0, -1), e).toString());
}
function Gn(a, n) {
  let i = new URL(a, n);
  return i.search = n.search, i.hash = n.hash, i;
}
function oa(a, n = 301) {
  return new Response(null, { status: n, headers: { "Cache-Control": "no-cache, no-store, must-revalidate", expires: "-1", pragma: "no-cache", location: ea(a), vary: "Accept-Language" } });
}
function Nn(a, n) {
  if (a.origin !== new URL(n.url).origin)
    return oa(a.toString(), 307);
  let i = D({ originalRequest: new Request(a) }), e = Qi(i), s = e ? {} : ka(i), o = n.method === "POST" && n.headers.has("x-action");
  if (s.response)
    return s.response;
  if (!e && !o) {
    let p = ya(i);
    if (p)
      return p;
  }
  return oa(a.toString());
}
var Ys = /\/$/;
function ka(a, n) {
  let { PAGES_DIR: i, BUILD_DIR: e, RESERVED_PAGES: s, I18N_CONFIG: o, CONFIG: p, LOCALES_SET: c, IS_PRODUCTION: r } = h(), { locales: t, defaultLocale: l, pages: u, domains: b } = o || {}, v = p.trailingSlash ? "/" : "";
  if (!l || !t?.length)
    return {};
  let d = zi(a), x = new URL(a.finalURL), [, m] = x.pathname.split("/"), j = x.pathname.replace(Ys, ""), J = { pagesRouter: C(i, s, d), rootRouter: C(e, undefined, d) };
  if (m !== d && !c.has(m)) {
    let { route: w } = J.pagesRouter.match(a), k = u?.[w?.name]?.[d] ?? j, [A, F] = Object.entries(b || {}).find(([, $]) => $.defaultLocale === d) ?? [], Q = `/${d}${k}${v}${x.search}${x.hash}`, f = A && (r || F?.dev) ? `${F?.protocol || "https"}://${A}${Q}` : Q;
    J.response = oa(f);
  }
  let g = { ...o, get _messages() {
    return a.store.get("_messages");
  } };
  if (a.i18n = { defaultLocale: l, locales: t, locale: d, t: $i(d, g), pages: u ?? {}, overrideMessages: (w) => {
    if (typeof w !== "function")
      return B({ messages: ["Error in overrideMessages", "overrideMessages requires a callback function"], docTitle: "Documentation about overrideMessages", docLink: "https://brisa.build/building-your-application/routing/internationalization#override-translations-in-web-components", req: a });
    let k = w(o?.messages?.[d]), A = (F) => a.store.set("_messages", F);
    if (k instanceof Promise)
      k.then(A);
    else
      A(k);
  } }, u)
    J.pagesRouter = Ji(u, J.pagesRouter);
  return J;
}
var Us = new Set(["SPA_NAVIGATION", "SERVER_ACTION"]);
function Zi({ req: a, location: n, mode: i }) {
  let e = new Headers({ "Content-Type": "application/json", "X-Navigate": n });
  if (i)
    e.set("X-Mode", i);
  return new Response(Ya(a), { status: 200, headers: e });
}
function _n(a, n) {
  return Us.has(a?.initiator) && n?.status >= 300 && n?.status < 400 ? Zi({ req: a, location: n.headers.get("Location") }) : n;
}
var ar = Symbol.for("DEPENDENCIES");
async function Bs(a) {
  let n = a.getReader(), i = "";
  while (true) {
    let { done: e, value: s } = await n.read();
    if (e)
      break;
    i += Xs(s);
  }
  return i;
}
function Xs(a) {
  if (typeof a === "string")
    return a;
  else
    return new TextDecoder().decode(a, { stream: true });
}
var Ws = typeof Bun !== "undefined" ? Bun.readableStreamToText : Bs;
function Oa(a) {
  let n = Bun.serve(a);
  return globalThis.brisaServer = n, { port: n.port, hostname: n.hostname, server: n };
}
function D({ originalRequest: a, route: n, store: i, webStore: e, i18n: s, finalURL: o, id: p }) {
  return a._tasks ??= [], a.after = (c) => {
    a._tasks.push(c);
  }, a.finalURL = o ?? a.finalURL ?? a.url, a.route = n ?? a.route, a.store = i ?? a.store ?? new Map, a.webStore = e ?? a.webStore ?? new Map, a.store.transferToClient = (c, r) => {
    for (let t of c)
      a.webStore.set(t, r);
  }, a.useContext = (c) => {
    let t = a.store.get(ra)?.get(c.id), l = c.defaultValue;
    if (!t)
      return { value: l };
    let u = t.get(t.get(E));
    if (!u || u.isProviderPaused())
      return { value: l };
    return { value: u.value ?? l };
  }, a.id = p ?? a.id, a.ws = globalThis.sockets?.get(a.id) ?? null, globalThis.sockets?.delete(a.id), a.i18n = a.i18n ?? s ?? { defaultLocale: "", locales: [], locale: "", t: () => "", overrideMessages: () => {
  }, pages: {} }, a.indicate = (c) => ({ id: `__ind:${c}`, value: false, error: {} }), a._style = "", a._globalStyle = "", a.css = (c, ...r) => {
    let t = String.raw(c, ...r);
    a._style += t, a._globalStyle += t;
  }, a.initiator ??= W.INITIAL_REQUEST, a;
}
function Yi(a, n) {
  if (a.name === "ERR_DLOPEN_FAILED") {
    B({ messages: ["ERR_DLOPEN_FAILED", "", "If you use FFI you must create a prebuild folder with the compiled files in there.", "All these prebuild files will be accessible from the build itself (build/prebuild).", "", "Example:", "", "path.join(Bun.env.BRISA_BUILD_FOLDER, 'prebuild', `libadd.${suffix}`)"], docTitle: "Documentation about FFI", docLink: "https://brisa.build/building-your-application/configuring/zig-rust-c-files", req: n });
    return;
  }
  B({ messages: [a.stack?.toString?.() ?? a.message, ""], req: n });
}
var Ms = Symbol.for("DEPENDENCIES");
async function Ui(a) {
  let { BUILD_DIR: n } = h(), i = await T("actions", n), { transferClientStoreToServer: e, formData: s, body: o } = await Za(a), p = new URL(a.url), c = a.headers.get("x-action") ?? p.searchParams.get("_aid") ?? "", r = a.headers.get("x-actions") ?? "[]", t = false, l = { action: a.url, autocomplete: "on", enctype: "multipart/form-data", encoding: "multipart/form-data", method: "post", elements: {}, reset: () => {
    t = true;
  } }, u = s ? [{ isTrusted: true, bubbles: false, cancelBubble: false, cancelable: false, composed: false, currentTarget: l, defaultPrevented: true, eventPhase: 0, formData: s, returnValue: true, srcElement: null, target: l, timeStamp: 0, type: "formdata" }] : o?.args ?? [];
  if (typeof u[0] === "object" && "isTrusted" in u[0] && "detail" in u[0] && u[0]._wc)
    u = u[0].detail;
  e();
  let v = [], d = [], x = r ? fn(r) : [], m = {};
  a.store.set(`__params:${c}`, u), a.store.set(Ms, x);
  for (let Q = x.length - 1;Q >= 0; Q -= 1)
    m = j(x[Q], m);
  function j(Q, H = {}) {
    let f = {};
    for (let [$, X] of Q)
      f[$] = async (...K) => {
        let { promise: y, resolve: Z, reject: G } = Promise.withResolvers(), M = i[X];
        v.push([X, y]), a.store.set(`__params:${X}`, K);
        try {
          let z = await M(H, a);
          if (z instanceof Response)
            d.push(z);
          return v.pop(), Z(z), z;
        } catch (z) {
          G(z);
        }
      };
    return f;
  }
  if (!i[c])
    return B({ messages: [`The action ${c} was not found.`, "Don't worry, it's not your fault. Probably a bug in Brisa."], docTitle: "Please report it", docLink: "https://github.com/brisa-build/brisa/issues/new", req: a }), new Response(Ya(a), { status: 404, headers: { "content-type": "application/json" } });
  let { promise: J, resolve: g } = Promise.withResolvers();
  v.push([c, J]), a._p = (Q) => {
    if (Q instanceof Promise)
      v.push(["", Q]);
    return Q;
  }, a._waitActionCallPromises = (Q) => {
    let H = v.findIndex(([f]) => f === Q);
    return Promise.all(v.slice(H + 1).map(([, f]) => f));
  };
  let w = await i[c](m, a), k = w instanceof Response;
  if (g(w), !k && d.length > 0)
    w = d[0];
  if (!(w instanceof Response))
    w = new Response(Ya(a), { headers: { "content-type": "application/json" } });
  let F = await (a.route ? await import(ia(a.route.filePath)) : {}).responseHeaders?.(a, w.status) ?? {};
  for (let [Q, H] of Object.entries(F))
    w.headers.set(Q, H);
  if (t)
    w.headers.set("X-Reset", "1");
  return w;
}
var Wi = pe(In(), 1);
function Mi(a) {
  let n = Wi.default.lookup(a) || "application/octet-stream", i = Wi.default.charset(n), e = i ? `;charset=${i.toLowerCase()}` : "";
  return n + e;
}
function Hi(a) {
  let n = new URL(a.finalURL);
  if (n.pathname.split("/")[a.i18n?.locale ? 2 : 1] === "api")
    return W.API_REQUEST;
  if (a.method !== "POST")
    return W.INITIAL_REQUEST;
  if (a.headers.has("x-action") || n.searchParams.has("_aid"))
    return W.SERVER_ACTION;
  return W.SPA_NAVIGATION;
}
async function ca() {
  Ds();
  let { IS_PRODUCTION: a, IS_DEVELOPMENT: n, PAGE_404: i, PAGE_500: e, RESERVED_PAGES: s, BUILD_DIR: o, PORT: p, PAGES_DIR: c, ASSETS_DIR: r, CONFIG: t, JS_RUNTIME: l, HEADERS: { CACHE_CONTROL: u } } = h();
  if (a && !Da.existsSync(o))
    throw new Error('Not exist "build" yet. Please run "brisa build" first');
  if (!Da.existsSync(c))
    throw new Error(`Not exist ${a ? "build/pages" : "src/pages"}" directory. It's required to run "${a ? "brisa start" : "brisa dev"}"`);
  let b = C(c, s), v = C(o), d = "hot-reload", x = "/_brisa/pages/", m = aa("websocket", o), j = m ? await import(m) : null, J = b.reservedRoutes[i], w = (await T("middleware", o))?.default, k = t?.tls, A = t?.basePath ?? "";
  return { port: p, development: !a, idleTimeout: t.idleTimeout, async fetch(f, $) {
    let X = Ai.randomUUID(), K = j?.attach ? await j.attach(f) ?? {} : {};
    if ($.upgrade(f, { data: { id: X, ...K } }))
      return;
    let y = D({ originalRequest: f, id: X }), Z = new URL(y.finalURL);
    if (n && Z.pathname === "/__brisa_dev_file__" && f.method === "POST") {
      if (l !== "bun")
        return new Response(null, { status: 404 });
      let Y = Z.searchParams.get("file"), _ = Z.searchParams.get("line"), R = Z.searchParams.get("column"), $a = P.sep + "_brisa" + P.sep + "pages";
      if (Y?.startsWith($a))
        Y = P.join(o, Y.replace($a, P.sep + "pages-client"));
      if (Y && _ != null && R != null)
        return Bun.openInEditor(Y, { line: +_, column: +R }), new Response(null, { status: 200 });
    }
    if (Z.searchParams.get("_not-found") || !Z.pathname.startsWith(A))
      return H(y);
    if (A)
      y.finalURL = ti(y.finalURL), Z.pathname = ti(Z.pathname);
    let G = Z.pathname.startsWith(x), M = Es(Z, r), z = M ? {} : ka(y);
    if (G) {
      let Y = P.join(o, "pages-client", Z.pathname.replace(x, ""));
      return Q(Y, y);
    }
    let N = () => {
      return b.match(y).route || v.match(y).route;
    };
    if (z.response)
      return N() ? z.response : H(y);
    if (z.pagesRouter && z.rootRouter)
      b = z.pagesRouter, v = z.rootRouter;
    if (!M) {
      let Y = ya(y);
      if (Y)
        return N() ? Y : H(y);
    }
    y.getIP = () => $.requestIP(f);
    let q = await F(y, { assetPath: M }).catch((Y) => {
      if (va(Y))
        return H(y);
      if (ba(Y))
        return Nn(new URL(Y.message, Z.origin), y);
      Yi(Y, y);
      let _ = b.reservedRoutes[e];
      if (!_)
        throw Y;
      return y.route = _, ja({ req: y, route: _, status: 500, error: Y });
    });
    return _n(y, q);
  }, tls: k, websocket: { open: (f) => {
    if (!globalThis.sockets)
      globalThis.sockets = new Map;
    let { id: $ } = f.data;
    if (globalThis.sockets.set($, f), !a)
      f.subscribe(d);
    j?.open?.(f);
  }, close: (f) => {
    let { id: $ } = f.data;
    if (globalThis.sockets?.delete?.($), !a)
      f.unsubscribe(d);
    j?.close?.(f);
  }, message: (f, $) => {
    j?.message?.(f, $);
  }, drain: (f) => {
    j?.drain?.(f);
  } } };
  async function F(f, { assetPath: $ }) {
    let X = Hi(f), { route: K, isReservedPathname: y } = b.match(f), Z = X === W.API_REQUEST, G = Z ? v.match(f) : null;
    if (f.initiator = X, f.route = Z ? G?.route : K, w) {
      let M = await Promise.try(() => w(f));
      if (M)
        return M;
    }
    if ($)
      return Q($, f);
    if (!Z && K && !y) {
      if (f.method === "POST") {
        if (!new URL(f.finalURL).searchParams.has("_aid"))
          f.store.set(tn, true);
        if (X === W.SERVER_ACTION)
          return Ui(f);
      }
      return ja({ req: f, route: K });
    }
    if (Z && G?.route && !G?.isReservedPathname) {
      let M = await import(ia(G.route.filePath)), z = f.method.toUpperCase(), N = M[z]?.(f);
      if (N)
        return N;
    }
    return H(f);
  }
  function Q(f, $) {
    let X = $.headers.get("accept-encoding") || "", K = a && t.assetCompression, y = "";
    if (K && X.includes("br"))
      y = "br";
    else if (K && X.includes("gzip"))
      y = "gz";
    let Z = { headers: { "content-type": Mi(f), "cache-control": u, ...y ? { "content-encoding": y === "br" ? "br" : "gzip", vary: "Accept-Encoding" } : {} } };
    return new Response(y ? wa(`${f}.${y}`) : wa(f), Z);
  }
  function H(f) {
    if (!J)
      return new Response("Not found", { status: 404, headers: { "cache-control": u } });
    return f.route = J, ja({ req: f, route: J, status: 404 });
  }
}
function Es(a, n) {
  let i = a.pathname === "/", e = P.join(n, a.pathname);
  if (i)
    return null;
  if (Da.existsSync(e))
    return e;
  if (Da.existsSync(e + ".js"))
    return e + ".js";
  return null;
}
function Ds(a = Boolean(S.argv[1]?.includes(P.join("brisa", "out", "cli", "serve", "index.js")) ?? false)) {
  if (!a) {
    if (!S.env.__CRYPTO_KEY__)
      S.env.__CRYPTO_KEY__ = Ai.randomBytes(32).toString("hex");
    if (!S.env.__CRYPTO_IV__)
      S.env.__CRYPTO_IV__ = Ai.randomBytes(8).toString("hex");
  }
  if (!S.env.BRISA_BUILD_FOLDER)
    S.env.BRISA_BUILD_FOLDER = P.join(S.cwd(), "build");
}
function Ki(a) {
  if (Array.isArray(a))
    return a;
  if (typeof a !== "string")
    return [];
  let n = [], i = 0, e, s, o, p, c;
  function r() {
    while (i < a.length && /\s/.test(a.charAt(i)))
      i += 1;
    return i < a.length;
  }
  function t() {
    return s = a.charAt(i), s !== "=" && s !== ";" && s !== ",";
  }
  while (i < a.length) {
    e = i, c = false;
    while (r())
      if (s = a.charAt(i), s === ",") {
        o = i, i += 1, r(), p = i;
        while (i < a.length && t())
          i += 1;
        if (i < a.length && a.charAt(i) === "=")
          c = true, i = p, n.push(a.substring(e, o)), e = i;
        else
          i = o + 1;
      } else
        i += 1;
    if (!c || i >= a.length)
      n.push(a.substring(e, a.length));
  }
  return n;
}
if (!Promise.withResolvers)
  Promise.withResolvers = () => {
    let a, n;
    return { promise: new Promise((e, s) => {
      a = e, n = s;
    }), resolve: a, reject: n };
  };
if (!Promise.try)
  Promise.try = (a) => {
    try {
      return Promise.resolve(a());
    } catch (n) {
      return Promise.reject(n);
    }
  };
var Rs = await ca();
async function za(a, n) {
  let i = { upgrade: () => {
  }, requestIP: () => a.socket.remoteAddress }, e = `${a.headers["x-forwarded-proto"] ?? "http"}://${a.headers.host}`, s = await Ss({ request: a, base: e }), o = await Rs.fetch.call(i, s, i);
  await Ps(n, o);
}
function Cs(a) {
  let n = a.headers;
  if (!n["content-type"])
    return null;
  let i = Number(n["content-length"]);
  if (a.httpVersionMajor === 1 && isNaN(i) && n["transfer-encoding"] == null || i === 0)
    return null;
  if (a.destroyed) {
    let s = new ReadableStream;
    return s.cancel(), s;
  }
  let e = false;
  return new ReadableStream({ start(s) {
    a.on("error", (o) => {
      e = true, s.error(o);
    }), a.on("end", () => {
      if (e)
        return;
      s.close();
    }), a.on("data", (o) => {
      if (e)
        return;
      if (s.enqueue(o), s.desiredSize === null || s.desiredSize <= 0)
        a.pause();
    });
  }, pull() {
    a.resume();
  }, cancel(s) {
    e = true, a.destroy(s);
  } });
}
async function Ss({ request: a, base: n }) {
  return new Request(n + a.url, { duplex: "half", method: a.method, headers: a.headers, body: Cs(a) });
}
async function Ps(a, n) {
  for (let [o, p] of n.headers)
    try {
      a.setHeader(o, o === "set-cookie" ? Ki(p) : p);
    } catch (c) {
      console.log({ error: c }), a.getHeaderNames().forEach((r) => a.removeHeader(r)), a.writeHead(500).end(String(c));
      return;
    }
  if (a.writeHead(n.status), !n.body) {
    a.end();
    return;
  }
  if (n.body.locked) {
    a.write("Fatal error: Response body is locked. This can happen when the response was already read (for example through 'response.json()' or 'response.text()')."), a.end();
    return;
  }
  let i = n.body.getReader();
  if (a.destroyed) {
    i.cancel();
    return;
  }
  let e = (o) => {
    if (a.off("close", e), a.off("error", e), i.cancel(o).catch(() => {
    }), o)
      a.destroy(o);
  };
  a.on("close", e), a.on("error", e), s();
  async function s() {
    let o = setInterval(() => {
      a.write(Buffer.from(""));
    }, 10);
    try {
      for (;; ) {
        let { done: p, value: c } = await i.read();
        if (p)
          break;
        if (!a.write(c)) {
          a.once("drain", s);
          return;
        }
      }
      clearInterval(o), a.end();
    } catch (p) {
      clearInterval(o), e(p instanceof Error ? p : new Error(String(p)));
    }
  }
}
async function Ti({ port: a = V.PORT } = { port: V.PORT }) {
  let n = h().CONFIG, i = n?.tls, e = i ? Is.createServer(i, za) : qs.createServer(za);
  if (i && (!i.key || !i.cert))
    B({ messages: ["Missing key or certificate in TLS configuration."] });
  return e.timeout = n?.idleTimeout || 30, e.listen(a), e.on("error", (s) => {
    B({ messages: [`Error starting ${i ? "https" : "http"} server in Node.js:`, s.message], stack: s.stack });
  }), { server: e, port: a, hostname: "localhost" };
}
var ao = await ca();
function Fi(a) {
  let n = Deno.serve({ port: a.port, hostname: a.hostname, cert: a.tls?.cert, key: a.tls?.key, responseWriteTimeout: a.idleTimeout, handler: io });
  return globalThis.brisaServer = n, { port: n.addr.port, hostname: n.addr.hostname, server: n };
}
async function io(a, n) {
  let i = { upgrade: () => {
  }, requestIP: () => n.remoteAddr }, e = await ao.fetch.call(i, a, i);
  if (!e)
    return new Response("Not Found", { status: 404 });
  return e;
}
var { LOG_PREFIX: O, JS_RUNTIME: Li, VERSION: no, IS_PRODUCTION: eo } = V;
function so(a) {
  if (Li === "node")
    return Ti.bind(null, { port: Number(a.port) });
  if (Li === "deno")
    return Fi.bind(null, a);
  return Oa.bind(null, a);
}
async function ae(a) {
  if (I.isPrimary && V.CONFIG?.clustering) {
    console.log(O.INFO, `Clustering enabled with ${qn().length} cpus`);
    for (let i = 0;i < qn().length; i++)
      I.fork();
    let n;
    I.on("message", (i, e) => {
      if (n && i.id !== n)
        return;
      n = i.id, console.log(O.INFO, e);
    }), I.on("exit", (i, e, s) => {
      console.log(O.ERROR, `Worker ${i.process.pid} exited`), console.log(O.ERROR, `Code: ${e}`), console.log(O.ERROR, `Signal: ${s}`), console.log(O.INFO, "Starting a new worker"), I.fork();
    });
    return;
  }
  try {
    let n = so(a), { hostname: i, port: e } = await n(), s = `\uD83D\uDE80 Brisa ${no}: Runtime on ${Si(Li)}`, o = `listening on http://${i}:${e}`, p = V.CONFIG?.clustering && I.worker ? I.worker.send.bind(I.worker) : console.log.bind(console, O.INFO);
    if (eo)
      p(s);
    p(o);
  } catch (n) {
    let { message: i } = n;
    if (i?.includes(`Is port ${a.port} in use?`))
      console.log(O.ERROR, i), ae({ ...a, port: 0 });
    else
      console.error(O.ERROR, i ?? "Error on start server"), process.exit(1);
  }
}
function Vi(a) {
  return (n) => {
    B({ messages: [`Oops! An ${a} occurred:`, "", ...n.message.split(`
`).map(ta), "", "This happened because there might be an unexpected issue in the code or an unforeseen situation.", "If the problem persists, please report this error to the Brisa team:", pa("\uD83D\uDD17 https://github.com/brisa-build/brisa/issues/new"), "Please don't worry, we are here to help.", "More details about the error:"], stack: n.stack });
  };
}
process.on("unhandledRejection", Vi("Unhandled Rejection"));
process.on("uncaughtException", Vi("Uncaught Exception"));
process.on("uncaughtExceptionMonitor", Vi("Uncaught Exception Monitor"));
var ie = await ca().catch((a) => {
  console.log(O.ERROR, a.message);
});
if (!ie)
  process.exit(1);
if (!process.env.USE_HANDLER)
  ae(ie);
var Tl = za;
export {
  Tl as default
};
