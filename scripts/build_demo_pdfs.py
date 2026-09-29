from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import PageBreak, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "downloads"
OUT.mkdir(parents=True, exist_ok=True)

NAVY = colors.HexColor("#17252d")
BRICK = colors.HexColor("#944b3d")
GOLD = colors.HexColor("#b88431")
CREAM = colors.HexColor("#f3eddf")
INK = colors.HexColor("#1e2527")
LINE = colors.HexColor("#c8beaa")

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="TitleForge", parent=styles["Title"], fontName="Times-Bold", fontSize=30, leading=33, textColor=NAVY, alignment=TA_LEFT, spaceAfter=14))
styles.add(ParagraphStyle(name="H1Forge", parent=styles["Heading1"], fontName="Times-Bold", fontSize=22, leading=25, textColor=NAVY, spaceBefore=8, spaceAfter=12))
styles.add(ParagraphStyle(name="H2Forge", parent=styles["Heading2"], fontName="Helvetica-Bold", fontSize=11, leading=14, textColor=BRICK, spaceBefore=12, spaceAfter=6, uppercase=True))
styles.add(ParagraphStyle(name="BodyForge", parent=styles["BodyText"], fontName="Helvetica", fontSize=9.5, leading=14, textColor=INK, spaceAfter=8))
styles.add(ParagraphStyle(name="SmallForge", parent=styles["BodyText"], fontName="Helvetica", fontSize=7.5, leading=10, textColor=colors.HexColor("#596064")))
styles.add(ParagraphStyle(name="EyebrowForge", parent=styles["BodyText"], fontName="Helvetica-Bold", fontSize=7.5, leading=10, textColor=GOLD, uppercase=True, letterSpacing=1.2, spaceAfter=8))

DISCLAIMER = "FICTIONAL DEMONSTRATION DOCUMENT - NOT FOR CONSTRUCTION, PURCHASING, INSTALLATION, OR SAFETY DECISIONS"

def header_footer(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(NAVY)
    canvas.rect(0, 0, letter[0], 0.36 * inch, fill=1, stroke=0)
    canvas.setFillColor(CREAM)
    canvas.setFont("Helvetica-Bold", 6.5)
    canvas.drawString(0.55 * inch, 0.14 * inch, DISCLAIMER)
    canvas.drawRightString(letter[0] - 0.55 * inch, 0.14 * inch, f"FIELDHOUSE FORGE  |  {doc.page}")
    canvas.setStrokeColor(GOLD)
    canvas.line(0.55 * inch, letter[1] - 0.52 * inch, letter[0] - 0.55 * inch, letter[1] - 0.52 * inch)
    canvas.setFillColor(NAVY)
    canvas.setFont("Times-Bold", 11)
    canvas.drawString(0.55 * inch, letter[1] - 0.4 * inch, "FIELDHOUSE FORGE")
    canvas.restoreState()

def doc(path, title, subtitle, story):
    target = OUT / path
    build = SimpleDocTemplate(str(target), pagesize=letter, leftMargin=.62*inch, rightMargin=.62*inch, topMargin=.72*inch, bottomMargin=.58*inch, title=title, author="Fieldhouse Forge Equipment Company")
    opening = [Spacer(1, .25*inch), Paragraph("HICKORY, INDIANA  /  DEMONSTRATION TECHNICAL LIBRARY", styles["EyebrowForge"]), Paragraph(title, styles["TitleForge"]), Paragraph(subtitle, styles["BodyForge"]), Spacer(1, .12*inch)]
    build.build(opening + story, onFirstPage=header_footer, onLaterPages=header_footer)

def facts(rows, widths=(2.05*inch, 4.8*inch)):
    table = Table([[Paragraph(f"<b>{a}</b>", styles["BodyForge"]), Paragraph(b, styles["BodyForge"])] for a, b in rows], colWidths=widths, hAlign="LEFT")
    table.setStyle(TableStyle([("VALIGN", (0,0), (-1,-1), "TOP"), ("LINEABOVE", (0,0), (-1,-1), .35, LINE), ("BOTTOMPADDING", (0,0), (-1,-1), 7), ("TOPPADDING", (0,0), (-1,-1), 7), ("BACKGROUND", (0,0), (0,-1), CREAM)]))
    return table

def bullets(items):
    return [Paragraph(f"+ {item}", styles["BodyForge"]) for item in items]

catalog = []
catalog += [Paragraph("Manufacturer profile", styles["H1Forge"]), facts([
    ("Legal name", "Fieldhouse Forge Equipment Company"), ("Headquarters", "214 Foundry Way, Hickory, Indiana 47300"), ("Founded", "1978 (fictional)"), ("Facility", "142,000 sq ft fictional fabrication and assembly plant"), ("Markets", "K-12, higher education, municipal recreation, parks, and community facilities"), ("Service", "Midwest direct coverage; nationwide through fictional qualified dealers"),
]), PageBreak()]
products = [
    ("FF-920", "ForgeFold 920 Forward-Fold Backstop", "Gymnasium Systems", "12-16 weeks", "Ceiling-suspended competition backstop coordinated to project structure and court use."),
    ("CC-8", "CourtCommand 8 Control Station", "Scoreboards & Controls", "8-10 weeks", "Eight-function lockable wall station for coordinated gym equipment operation."),
    ("CL-500", "CenterLine 500 Divider Curtain", "Gymnasium Systems", "10-14 weeks", "Center-roll court divider with reinforced vinyl and open mesh construction."),
    ("V-300", "Varsity 300 Volleyball System", "Gymnasium Systems", "6-8 weeks", "Complete competition package with posts, sleeves, padding, net, and cart."),
    ("FR-6", "Foundry 6 Training Rack", "Strength & Conditioning", "8-12 weeks", "Floor-anchored six-post rack with integrated plate and bar storage."),
    ("FP-8", "Foundry Platform 8", "Strength & Conditioning", "6-8 weeks", "Eight-foot maple and rubber institutional lifting platform."),
    ("EW-2", "EndWall 2 Impact Padding", "Padding & Surfaces", "6-10 weeks", "Field-measured wall-padding system for court perimeters and columns."),
    ("SG-24", "Summit 24 Soccer Goal", "Outdoor Equipment", "5-7 weeks", "Full-size aluminum school and municipal soccer goal package."),
]
for index, (model, name, family, lead, description) in enumerate(products):
    catalog += [Paragraph(f"MODEL {model}  /  {family.upper()}", styles["EyebrowForge"]), Paragraph(name, styles["H1Forge"]), Paragraph(description, styles["BodyForge"]), facts([("Model", model), ("Category", family), ("Typical lead time", lead), ("Manufacturing", "Hickory, Indiana"), ("Quotation", "Project-specific through a fictional authorized dealer")]), Spacer(1, .15*inch), Paragraph("Representative applications", styles["H2Forge"])]
    catalog += bullets(["Education and public-use athletic facilities", "New construction and renovation", "Specification-driven project procurement"])
    if index < len(products)-1: catalog.append(PageBreak())
doc("fieldhouse-forge-catalog.pdf", "2026 Equipment Catalog", "A model-level overview of fictional athletic facility equipment for sourcing and extraction demonstrations.", catalog)

ff = [Paragraph("Product intent", styles["H1Forge"]), Paragraph("The fictional ForgeFold 920 demonstrates the information normally coordinated for a ceiling-suspended basketball backstop. Final geometry, supports, attachment loads, controls, clearances, and installation requirements would be project-engineered.", styles["BodyForge"]), facts([("Model", "FF-920"), ("CSI section", "11 66 23 - Gymnasium Equipment"), ("Applications", "K-12 competition gyms, municipal fieldhouses, college recreation"), ("Attachment height", "18-36 ft project-configured"), ("Backboard", "72 x 42 in clear glass concept"), ("Operation", "115 V electric winch concept"), ("Frame finish", "Powder coat, 12 standard colors"), ("Estimated ship weight", "1,180-1,620 lb by configuration"), ("Typical lead time", "12-16 weeks after approved submittals")]), PageBreak(), Paragraph("Coordination checklist", styles["H1Forge"])] + bullets(["Confirm playing-line and backboard locations", "Coordinate supporting structure and attachment elevations", "Review folded position against lights, ducts, sprinklers, and other equipment", "Coordinate power, key controls, and emergency procedures", "Verify service access and installation path", "Complete project-specific engineering and approved submittals before fabrication"]) + [Paragraph("Common options", styles["H2Forge"])] + bullets(["Manual or powered height adjustment", "Safety strap monitoring", "Shot-clock support", "Custom frame color"])
doc("ff-920-product-data.pdf", "FF-920 Product Data", "ForgeFold 920 forward-fold basketball backstop - representative product data.", ff)

csi = [Paragraph("Specification index", styles["H1Forge"]), facts([("11 66 23", "Gymnasium Equipment - backstops, divider curtains, volleyball systems, controls, padding"), ("11 66 53", "Gymnasium and Exercise Equipment - racks, platforms, storage, room planning"), ("11 68 33", "Athletic Field Equipment - soccer goals, benches, shelters, barrier netting")]), PageBreak(), Paragraph("Example Part 1 - General", styles["H1Forge"]), Paragraph("Coordinate athletic equipment with structure, electrical work, life-safety systems, finishes, and adjacent equipment. Submit product data, project-specific drawings, finish selections, and operating requirements for review.", styles["BodyForge"]), Paragraph("Example Part 2 - Products", styles["H1Forge"]), Paragraph("Provide project-configured equipment with materials, dimensions, finishes, operating systems, and accessories indicated in approved submittals. Model references on this demonstration site are fictional and establish no real basis of design.", styles["BodyForge"]), PageBreak(), Paragraph("Example Part 3 - Execution", styles["H1Forge"])] + bullets(["Verify field conditions before fabrication", "Coordinate delivery and installation sequencing", "Install through qualified personnel", "Demonstrate operation to the owner", "Provide fictional closeout manuals and maintenance schedules"])
doc("fieldhouse-forge-csi-guide.pdf", "Sample CSI Coordination Guide", "Demonstration language showing how athletic equipment categories could be organized for specification review.", csi)

coord = [Paragraph("Early project inputs", styles["H1Forge"])] + bullets(["Room dimensions and reflected ceiling plan", "Court layouts and activity schedule", "Structural framing and available attachment zones", "Power and control locations", "Equipment storage and changeover routes", "Owner access and supervision requirements"]) + [PageBreak(), Paragraph("Overhead coordination matrix", styles["H1Forge"]), facts([("Basketball backstops", "Playing position, folded position, attachment height, bracing, controls"), ("Divider curtains", "Travel path, roll or fold volume, lighting and sprinkler conflicts"), ("Volleyball", "Sleeve locations, cover plates, post storage, referee stand"), ("Controls", "Owner access, grouping, labeling, line voltage and low voltage"), ("Service", "Lift access, inspection space, safe isolation")]), PageBreak(), Paragraph("Submittal review prompts", styles["H1Forge"])] + bullets(["Do model numbers match the equipment schedule?", "Do dimensions match the architectural and structural backgrounds?", "Are loads and attachment concepts identified?", "Are operating controls and electrical requirements coordinated?", "Are finishes and graphics approved?", "Is the installation sequence compatible with the project schedule?"])
doc("gym-coordination-guide.pdf", "Gym Equipment Coordination Guide", "A fictional architect and contractor checklist for early athletic equipment coordination.", coord)

print("\n".join(str(path) for path in sorted(OUT.glob("*.pdf"))))
