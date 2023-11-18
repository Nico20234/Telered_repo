        export default function () {
        let e = document.createElement("script"),
            t = document.head || document.getElementsByTagName("head")[0];
        localStorage.clear(); //Borrar Historial
        (e.src =
            "https://cdn.jsdelivr.net/npm/rasa-webchat@1.x.x/lib/index.js"),
            (e.async = !0),
            (e.onload = () => {
                window.WebChat.default(
                    {
                        initPayload: '/start',
                        customData: { language: "es" },
                        socketUrl: "http://localhost:5005",
                        title: 'Telered',
                        subtitle: 'En línea',
                        storage: 'session',
                        profileAvatar: "./images/teleredLogo.png",
                        openLauncherImage: "./images/abrirChat.png",
                        closeImage: "./images/cerrarChat.png",
                        inputTextFieldHint: "Escribe un mensaje...",
                        connectingText: "Intentando conectar...",
                        hideWhenNotConnected: false
                    },
                    null
                );
            }),
        t.insertBefore(e, t.firstChild);
}
