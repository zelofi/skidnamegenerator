window.onload = function() {
    const names = [
      "stella",
      "starlight",
      "moon",
      "sun",
      "mimi",
      "boykisser",
      "femboy",
      "skid",
      "starry",
      "sillybilly",
      "seri",
      "pepperoni",
      "unity",
      "error"
    ];

    const fileExtensionsAndOtherShi = [
        "sys",
        "exe",
        "txt",
        "rat",
        "zip",
        "json",
        "trojan",
        "seroxen"
    ];

    const cornyNames1 = [
        "photon",
        "playfab"
    ];

    const cornyNames2 = [
        "settings",
        "pun",
        "punv1",
        "punv2",
        "fusion",
        "fusionv1",
        "fusionv2",
        "quantum",
        "voice",
        "voicev1",
        "voicev2",
        "sharedsettings",
        "azurefunctions",
        "cloudscript",
        "revisions",
        "automation",
        "spammer",
        "secretkey",
    ];

    const type = [
        "name+fileextension",
        "name+photon",
        "name+playfab",
        "photon+fileextension",
        "playfab+fileextension",
        "photon",
        "playfab"
    ];

    const nameLabel = document.getElementById("name");
    const generateButton = document.getElementById("generate");

    function GenerateName() {
        const randomType = Math.floor(Math.random() * type.length);
        const _type = type[randomType];

        const randomName = Math.floor(Math.random() * names.length);
        const randomFileExtension = Math.floor(Math.random() * fileExtensionsAndOtherShi.length);
        const randomCornyName = Math.floor(Math.random() * cornyNames2.length);

        switch(_type) {
            case "name+fileextension":
                nameLabel.textContent = `${names[randomName]}.${fileExtensionsAndOtherShi[randomFileExtension]}`;
                break;
            case "name+photon":
                nameLabel.textContent = `${names[randomName]}.${cornyNames1[0]}${cornyNames2[randomCornyName]}`;
                break;
            case "name+playfab":
                nameLabel.textContent = `${names[randomName]}.${cornyNames1[1]}${cornyNames2[randomCornyName]}`;
                break;
            case "photon+fileextension":
                nameLabel.textContent = `${cornyNames1[0]}${cornyNames2[randomCornyName]}.${fileExtensionsAndOtherShi[randomFileExtension]}`;
                break;
            case "playfab+fileextension":
                nameLabel.textContent = `${cornyNames1[1]}${cornyNames2[randomCornyName]}.${fileExtensionsAndOtherShi[randomFileExtension]}`;
                break;
            case "photon":
                nameLabel.textContent = `${cornyNames1[0]}${cornyNames2[randomCornyName]}`;
                break;
            case "playfab":
                nameLabel.textContent = `${cornyNames1[1]}${cornyNames2[randomCornyName]}`;
                break;
        }
    }       

    generateButton.onclick = GenerateName;
}