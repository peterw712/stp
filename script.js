function generatePineScript() {
    const dataInput = document.getElementById('dataInput').value;
    const lines = dataInput.trim().split('\n');
    let pineScript = `//@version=5\nindicator("Buy and Sell Levels", overlay=true)\n\n// Plot buy and sell levels\n`;

    lines.forEach(line => {
        const [signal, price] = line.trim().split(/\s+/);
        if (signal === 'Buy') {
            pineScript += `plot(${price}, title='Buy Level', color=color.green, style=plot.style_stepline, linewidth=2, trackprice=true)\n`;
            pineScript += `hline(${price}, "Buy Level", color=color.green, linestyle=hline.style_dotted, linewidth=1)\n`;
        } else if (signal === 'Sell') {
            pineScript += `plot(${price}, title='Sell Level', color=color.red, style=plot.style_stepline, linewidth=2, trackprice=true)\n`;
            pineScript += `hline(${price}, "Sell Level", color=color.red, linestyle=hline.style_dotted, linewidth=1)\n`;
        }
    });

    const pineScriptOutput = document.getElementById('pineScriptOutput');
    pineScriptOutput.textContent = pineScript;
}

function copyToClipboard() {
    const pineScriptOutput = document.getElementById('pineScriptOutput');
    const textArea = document.createElement('textarea');
    textArea.value = pineScriptOutput.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Pine script copied to clipboard!');
}
