const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Winsper_Tech,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function FREEZER_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_FREEZER_Tech = Winsper_Tech({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_freezer_Tech.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Freezer_Tech.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Winsper_Tech.ev.on('creds.update', saveCreds)
            Pair_Code_By_Winsper_Tech.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Freezer_Tech.sendMessage(Pair_Code_By_Freezer_Tech.user.id, { text: '' + b64data });

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
 await Pair_Code_By_Freezer_Tech.sendMessage(Pair_Code_By_Freezer_Tech.user.id,{text: FREEZER_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Freezer_Tech.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    FREEZER_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await FREEZER_MD_PAIR_CODE()
});
module.exports = router
