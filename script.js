
// Toggle theme color 
function toggleBackground() {
    var element = document.getElementById("mapContainer");
    element.classList.toggle("light");
}


// Creating flags function 
function createFlags() {
    // Flag object list 
    var objectList = [
        {
            id: 1,
            left: 60,
            top: 47,
            side: 'TOP',
            color: 'RED',
            headText: 'TSX',
            numText: '16654.09',
            coloredNo: '+0.79% +101.17%'
        },
        {
            id: 2,
            left: 81,
            top: 76,
            side: 'BOTTOM',
            color: 'RED',
            headText: 'TSX',
            numText: '16654.09',
            coloredNo: '+0.79% +101.17%'

        },
        {
            id: 3,
            left: 71,
            top: 50,
            side: 'BOTTOMs',
            color: 'GREEN',
            headText: 'TSX',
            numText: '16654.09',
            coloredNo: '+0.79% +101.17%'
        },
        {
            id: 4,
            left: 26,
            top: 65,
            side: 'BOTTOM',
            color: 'RED',
            headText: 'TSX',
            numText: '16654.09',
            coloredNo: '+0.79% +101.17%'

        },
        {
            id: 5,
            left: 18,
            top: 46,
            side: 'TOP',
            color: 'GREEN',
            headText: 'TSX',
            numText: '16654.09',
            coloredNo: '+0.79% +101.17%'

        }

    ];

    // Looping through the objects 
    for (var i = 0; i < objectList.length; i++) {
        // Create flag anchor 
        var obj = document.createElement('div');
        // Create flag handler
        var objVertical = document.createElement('div');
        // Create flag 
        var objFlag = document.createElement('div');

        // For red color flags 
        if (objectList[i].color == "RED") {
            // Adding styles to flag anchor
            obj.style.cssText = 'border-radius:100%;z-index:99;position:absolute;top:' + objectList[i].top + '%;left:' + objectList[i].left + '%;width:5px;height:5px;border:3px solid #6d2f30;background:#e7274b;';
            //   Set flag inner data 
            objFlag.innerHTML = "<div style='color: #ffffff;font-size: 9px;'>" + objectList[i].headText + "</div><div style='color: #ffffff;font-size: 6px;'>" + objectList[i].numText + "</div><div style='color: #e7274b;font-size: 6px;margin-top: auto;'>" + objectList[i].coloredNo + "</div>";
            // For upside flags 
            if (objectList[i].side == "TOP") {
                objVertical.style.cssText = 'height:30px;width:5px;z-index:99;position:absolute;top:calc(' + objectList[i].top + '% - 28px);left:' + objectList[i].left + '%;border-right: 2px solid #6d2f30;';
                objFlag.style.cssText = 'height:30px;width:70px;z-index:99;position:absolute;top:calc(' + objectList[i].top + '% + -60px);left:calc(' + objectList[i].left + '% + 5px);border: 2px solid #6d2f30;display: grid;padding: 4px;border-radius:7px;background:#6d2f30';
            } else {
                // For downside flags 
                objVertical.style.cssText = 'height:30px;width:5px;z-index:99;position:absolute;top:calc(' + objectList[i].top + '% + 9px );left:' + objectList[i].left + '%;border-right: 2px solid #6d2f30;';
                objFlag.style.cssText = 'height:30px;width:70px;z-index:99;position:absolute;top:calc(' + objectList[i].top + '% + 30px);left:calc(' + objectList[i].left + '% + -75px);border: 2px solid #6d2f30;display: grid;padding: 4px;border-radius:7px;background:#6d2f30';
            }

        } else {
            // For green color flags 

            obj.style.cssText = 'border-radius:100%;z-index:99;position:absolute;top:' + objectList[i].top + '%;left:' + objectList[i].left + '%;width:5px;height:5px;border:3px solid #074b3c;background:#1ec19b;';
            objFlag.innerHTML = "<div style='color: #ffffff;font-size: 9px;'>" + objectList[i].headText + "</div><div style='color: #ffffff;font-size: 6px;'>" + objectList[i].numText + "</div><div style='color: #1ec19b;font-size: 6px;margin-top: auto;'>" + objectList[i].coloredNo + "</div>";

            if (objectList[i].side == "TOP") {
                objVertical.style.cssText = 'height:30px;width:5px;z-index:99;position:absolute;top:calc(' + objectList[i].top + '% - 28px);left:' + objectList[i].left + '%;border-right: 2px solid #074b3c;';
                objFlag.style.cssText = 'height:30px;width:70px;z-index:99;position:absolute;top:calc(' + objectList[i].top + '% + -60px);left:calc(' + objectList[i].left + '% + 5px);border: 2px solid #074b3c;display: grid;padding: 4px;border-radius:7px;background:#074b3c';
            } else {
                objVertical.style.cssText = 'height:30px;width:5px;z-index:99;position:absolute;top:calc(' + objectList[i].top + '% + 9px );left:' + objectList[i].left + '%;border-right: 2px solid #074b3c;';
                objFlag.style.cssText = 'height:30px;width:70px;z-index:99;position:absolute;top:calc(' + objectList[i].top + '% + 30px);left:calc(' + objectList[i].left + '% + -75px);border: 2px solid #074b3c;display: grid;padding: 4px;border-radius:7px;background:#074b3c';
            }

        }
        // append created elements to the document body 
        document.body.appendChild(obj);
        document.body.appendChild(objVertical);
        document.body.appendChild(objFlag);
    }

}

// Calling create flag function 
createFlags();


// Chathurika Wijekoon 
