<template>
    <div class="content">
            Diese Anwendung stellt eine mögliche Umsetzung dar, welche so in der Ralität genutzt werden könnte. Inhalt der Anwendung ist die Darstellung von Maschinen samt ihrer Baugruppen und derer einzelnen Bauteile. Einige Teile des Inhalts, besonders des Homescreens sind Platzhalter und stellen einen möglichen Aufbau dar.<br /> <br />
            Über die Navigationsleiste kann auf die verschiedenen Komponenten zugegriffen werden.
        <br />
    </div>
    <br />
    <div>
        <table>
            <tr>
                <th>
                    <div class="comp">
                        <img class="image1" src="../assets/raspberry.png" alt="">
                        <h3>Test</h3>
                        <div class="text">
                            Aufbau & Prototyping: CanaKit Raspberry Pi 3 Komplettes Starter Kit
                            Es ist viel einfacher, Hardware-Prototypen zu erstellen, wenn Sie eine legitime Startbasis haben.
                            Der Raspberry Pi 3, ein Mini-Linux-Computer, kann als Ausgangspunkt und Gehirn einer Vielzahl von Geräten dienen.
                            Wir empfehlen das CanaKit Raspberry Pi 3 Complete Starter Kit, um alles von einer Spielekonsole bis zu einem Smart-Home-Lautsprecher zu bauen.
                            Der mitgelieferte Raspberry Pi 3 Model B-Computer verfügt über Software und allgemeine Ein- / Ausgabestifte zum Ausführen zusätzlicher Lichter, Sensoren oder Schalter.
                            Das Kit enthält außerdem alles, was Sie zum Starten eines Projekts benötigen, einschließlich Kabel, eines Netzteils, einer microSD-Karte und einer praktischen Hülle.
                        </div>
                        
                    </div>
                </th>
                <th>
                    <div class="comp">
                        
                        <h3>Test2</h3>
                        <div class="text">
                            Video- und Fotobearbeitung: Dell XPS 15 Laptop
                            Die Anschlüsse und Anschlüsse des Dell XPS 15-Laptops bieten Platz für alle Arten von Geräten, die zum Aufnehmen und Übertragen von Videos verwendet werden.
                            Neben einem riesigen 4K-Display verfügt es über einen leistungsstarken Prozessor und eine Grafikkarte. Dies bedeutet, dass Sie weniger Zeit mit Warten verbringen müssen,
                            da große Dateien schneller geladen und gerendert werden.
                            Ein Grund, warum es unsere erste Wahl für Video- und Fotobearbeitungs-Laptops ist, ist, dass die Tastatur bequem genug ist,
                            um sie während langer Bearbeitungssitzungen zu verwenden. Das Trackpad des XPS reagiert und der Touchscreen ist intuitiv - zwei Funktionen, die dazu beitragen,
                            präzise Änderungen vorzunehmen.
                        </div>
                        
                        <img class="image2" src="../assets/Laptop.png" alt="">
                    </div>
                </th>
            </tr>
        </table>
    </div>

</template>

<script>
    
</script>

<style>
    th {
        width: 500px;
        font-size: 20px;
        font-weight: 600;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

    .comp {
        background-color: azure;
        border-block-style: solid;
        border-block-width: 1px;
        border-color: lightgray;
        border-radius: 10px;
        font-size: 17px;
        margin-right: 80px;
    }

    .image1 {
        border-radius: 10px;
        font-size: 17px;
        margin-bottom: 20px;
    }

    .image2 {
        border-radius: 10px;
        font-size: 17px;
        margin-top: 20px;
    }

    table {
        width: 80%;
        display: inline-block;
    }

    .h3 {
        font-size: 20px;
    }

    .content {
        background-color: azure;
        border-block-style: solid;
        border-block-width: 1px;
        border-block-color: lightgray;
        font-size: 20px;
        display: inline-flex;
        width: 80%;
        padding-top: 10px;
        margin-top: 10px;
        margin-bottom: 20px;
        padding: 10px;
        border-radius: 7px;
    }

    .text {
        padding: 10px;
    }

</style>