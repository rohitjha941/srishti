from PyPDF2 import PdfFileWriter, PdfFileReader
import io
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter,landscape, A4

name = "Rohit Jha"
packet = io.BytesIO()
pos = "Project Name"
group = "Tinkering Lab"
can = canvas.Canvas(packet, pagesize=landscape(A4))
can.drawCentredString(140, 329, "Certificate of Participation")
can.drawCentredString(145, 285, "This is to certify that ")
can.drawCentredString(140, 255, name)
can.drawCentredString(140, 225, "has exibited " +
                      pos + " in " + group + " during")
can.drawCentredString(
    0, 205, "Srishti 2019 organised by Students’ Technical Council , Indian Institute of Technology Roorkee")


can.save()

# move to the beginning of the StringIO buffer
packet.seek(0)
new_pdf = PdfFileReader(packet)
# read your existing PDF
existing_pdf = PdfFileReader(open("certi.pdf", "rb"))
output = PdfFileWriter()
# add the "watermark" (which is the new pdf) on the existing page
page = existing_pdf.getPage(0)
page.mergePage(new_pdf.getPage(0))
output.addPage(page)
# finally, write "output" to a real file
outputStream = open("destination.pdf", "wb")
output.write(outputStream)
outputStream.close()
