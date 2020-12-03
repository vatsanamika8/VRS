<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>Vehicles Stocks</title>
            </head>
            <style>
                td{
                    font-weight:bolder;
                    background-color: violet;
                    text-align: center;
                }
            </style>
            <body style="background-image: url(../images/xmlbg.jpg);">
                <h1 align= "center" style="color:black;">Vehicles Stocks</h1>
                <table style="width:50%; border:3px solid white; color: black; margin-left: auto; margin-right: auto; padding: 5px;">
                    <caption style="text-align:left">Car Stocks</caption>
                    <tr bgcolor="black" style="width:50%; border:3px solid black; color: white; margin-left: auto; margin-right: auto; padding: 5px;">
                        <th>Model</th>
                        <th>Color</th>
                        <th>Price</th>
                        <th>Mileage</th>
                        <th>Availability</th>
                    </tr>
                    <xsl:for-each select="Vehicles/Car">
                        <tr>
                            <td><xsl:value-of select="Model"/></td>
                            <td><xsl:value-of select="Color"/></td>
                            <td><xsl:value-of select="Price"/></td>
                            <td><xsl:value-of select="Mileage"/></td>
                            <td><xsl:value-of select="Availability"/></td>
                        </tr>
                    </xsl:for-each>
                </table>

                <table style="width:50%; border:3px solid white; color: black; margin-left: auto; margin-right: auto; padding: 5px;">
                    <caption style="text-align:left">Bike Stocks</caption>
                    <tr bgcolor="black" style="width:50%; border:3px solid black; color: white; margin-left: auto; margin-right: auto; padding: 5px;">
                        <th>Model</th>
                        <th>Color</th>
                        <th>Price</th>
                        <th>Mileage</th>
                        <th>Availability</th>
                    </tr>
                    <xsl:for-each select="Vehicles/Bike">
                        <tr>
                            <td><xsl:value-of select="Model"/></td>
                            <td><xsl:value-of select="Color"/></td>
                            <td><xsl:value-of select="Price"/></td>
                            <td><xsl:value-of select="Mileage"/></td>
                            <td><xsl:value-of select="Availability"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>