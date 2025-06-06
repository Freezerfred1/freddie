const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: Freezer_Tech,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("@whiskeysockets/baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function FREEZER_MD_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_Freezer_Tech = Freezer_Tech({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_Freezer_Tech.ev.on('creds.update', saveCreds)
			Qr_Code_By_Freezer_Tech.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_Wasi_Tech.sendMessage(Qr_Code_By_Wasi_Tech.user.id, { text: '' + b64data });
	
				   let FREEZER_MD_TEXT = `
❏ freezer ｍｄ ｓｅｓｓｉｏｎ ｓｕｃｃｅｓｓｆｕｌｌｙ ｃｏｎｎｅｃｔｅｄ ❏

❏ ʏᴏᴜ ʜᴀᴠᴇ ᴄᴏᴍᴘʟᴇᴛᴇᴅ ᴛʜᴇ ғɪʀsᴛ sᴛᴇᴘ , ᴄᴏᴘʏ ᴛʜᴇ ᴀʙᴏᴠᴇ sᴇssɪᴏɴ ᴀɴᴅ sᴇɴᴅ ɪᴛ ᴛᴏ ʏᴏᴜʀ ᴅᴇᴘʟᴏʏᴇʀ ᴏʀ ᴅᴇᴘʟᴏʏ ᴏɴ ʜᴇʀᴏᴋᴜ❏

❏ғᴏʟʟᴏᴡ ʙᴏᴛ ᴄʜᴀɴɴᴇʟ ғᴏʀ ᴜᴘᴅᴀᴛᴇs  ❏
[ 🔘https://whatsapp.com/channel/0029Vb5mxL6F1YlTPss80Y2t🔘]
❏ᴀɴʏ ᴅɪғғɪᴄᴜʟᴛɪᴇs ᴄᴏɴᴛᴀᴄᴛ ʙᴏᴛ ᴏᴡɴᴇʀ❏

> *𝚠𝚑𝚊𝚝𝚜𝚊𝚙𝚙⇘* 
https://wa.me/254798757856

> *𝙸𝚗𝚜𝚝𝚊𝚐𝚛𝚊𝚖⇘* 
https://www.instagram.com/i.c.o.n.i.c_n.i.c.c.u.r?igsh=MW5kM3NnZTVxYnY1bQ==

> *𝚝𝚎𝚕𝚎𝚐𝚛𝚊𝚖⇘*
https://t.me/+254798757856]

> ɢᴇɴᴀʀᴀᴛᴇᴅ ʙʏ ICONICFREEZER`
	 await Qr_Code_By_Freezer_Tech.sendMessage(Qr_Code_By_Freezer_Tech.user.id,{text:FREEZER_MD_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code_By_Freezer_Tech.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					FREEZER_MD_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service is Currently Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await FREEZER_MD_QR_CODE()
});
module.exports = router
