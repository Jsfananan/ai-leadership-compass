import jsPDF from 'jspdf';

const NAVY = [26, 43, 91];
const GRAY = [100, 100, 100];
const LIGHT_GRAY = [160, 160, 160];
const WHITE = [255, 255, 255];

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)]
    : NAVY;
}

export function generateResultsPDF(archetype, dimScores, totalScore, percentile, role, industry, goal, months) {
  try {
    const doc = new jsPDF('p', 'mm', 'a4');
    const pageWidth = 210;
    const margin = 20;
    const contentWidth = pageWidth - margin * 2;
    let y = 20;
    const accentRgb = hexToRgb(archetype.color);

  function checkPageBreak(needed) {
    if (y + needed > 275) {
      doc.addPage();
      y = 20;
    }
  }

  function drawLine() {
    doc.setDrawColor(...LIGHT_GRAY);
    doc.setLineWidth(0.3);
    doc.line(margin, y, pageWidth - margin, y);
    y += 6;
  }

  // ── Header ──
  doc.setFillColor(...accentRgb);
  doc.rect(0, 0, pageWidth, 50, 'F');

  doc.setTextColor(...WHITE);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('AI LEADERSHIP COMPASS', margin, 15);

  doc.setFontSize(26);
  doc.setFont('helvetica', 'bold');
  doc.text(archetype.name, margin, 32);

  doc.setFontSize(11);
  doc.setFont('helvetica', 'italic');
  doc.text(`"${archetype.tagline}"`, margin, 42);

  y = 60;

  // ── Profile summary ──
  doc.setTextColor(...NAVY);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  const profileItems = [
    `Role: ${role}`,
    `Industry: ${industry}`,
    `Score: ${totalScore}/40`,
    `Top ${percentile}% of leaders`,
  ];
  doc.text(profileItems.join('  |  '), margin, y);
  y += 6;

  doc.setFontSize(8);
  doc.setTextColor(...GRAY);
  doc.text(`Goal: ${goal}`, margin, y);
  y += 10;

  drawLine();

  // ── Dimension Scores ──
  doc.setTextColor(...NAVY);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Your Dimension Scores', margin, y);
  y += 8;

  const dimLabels = {
    awareness: 'AI Awareness',
    proficiency: 'Tool Proficiency',
    strategy: 'Strategic Integration',
    collaboration: 'Human-AI Collaboration',
    leadership: 'Change Leadership',
  };

  Object.entries(dimLabels).forEach(([key, label]) => {
    const score = dimScores[key] || 0;
    const barWidth = contentWidth * 0.6;
    const fillWidth = (score / 8) * barWidth;

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...NAVY);
    doc.text(label, margin, y);
    doc.text(`${score}/8`, margin + contentWidth - 5, y, { align: 'right' });

    // Bar background
    doc.setFillColor(230, 230, 230);
    doc.roundedRect(margin + 55, y - 3.5, barWidth, 5, 2, 2, 'F');

    // Bar fill
    if (fillWidth > 0) {
      doc.setFillColor(...accentRgb);
      doc.roundedRect(margin + 55, y - 3.5, fillWidth, 5, 2, 2, 'F');
    }

    y += 9;
  });

  y += 4;
  drawLine();

  // ── Strengths & Growth ──
  checkPageBreak(50);
  doc.setTextColor(...NAVY);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Strengths', margin, y);
  doc.text('Growth Opportunities', margin + contentWidth / 2 + 5, y);
  y += 7;

  const maxItems = Math.max(archetype.strengths.length, archetype.growth.length);
  for (let i = 0; i < maxItems; i++) {
    checkPageBreak(12);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...GRAY);

    if (archetype.strengths[i]) {
      const lines = doc.splitTextToSize(`+ ${archetype.strengths[i]}`, contentWidth / 2 - 5);
      doc.text(lines, margin, y);
    }
    if (archetype.growth[i]) {
      const lines = doc.splitTextToSize(`> ${archetype.growth[i]}`, contentWidth / 2 - 5);
      doc.text(lines, margin + contentWidth / 2 + 5, y);
    }
    y += 10;
  }

  y += 2;
  drawLine();

  // ── 6-Month Growth Plan ──
  checkPageBreak(15);
  doc.setTextColor(...NAVY);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('Your 6-Month Growth Plan', margin, y);
  y += 10;

  months.forEach((month) => {
    checkPageBreak(60);

    // Month header bar
    doc.setFillColor(...accentRgb);
    doc.roundedRect(margin, y - 4, contentWidth, 10, 2, 2, 'F');
    doc.setTextColor(...WHITE);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text(`Month ${month.month}: ${month.title}`, margin + 4, y + 2);
    y += 12;

    doc.setFontSize(8);
    doc.setFont('helvetica', 'italic');
    doc.setTextColor(...GRAY);
    doc.text(month.theme, margin, y);
    y += 6;

    // Weekly Actions
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...NAVY);
    doc.setFontSize(9);
    doc.text('Weekly Actions', margin, y);
    y += 5;

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...GRAY);
    doc.setFontSize(8);
    month.weeklyActions.forEach((action, i) => {
      checkPageBreak(8);
      const lines = doc.splitTextToSize(`${i + 1}. ${action}`, contentWidth - 5);
      doc.text(lines, margin + 3, y);
      y += lines.length * 4 + 2;
    });

    y += 2;

    // Study Keywords
    checkPageBreak(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...NAVY);
    doc.setFontSize(9);
    doc.text('Study Keywords', margin, y);
    y += 5;
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...GRAY);
    doc.setFontSize(8);
    doc.text(month.studyKeywords.join('  |  '), margin + 3, y);
    y += 6;

    // Custom Prompt
    checkPageBreak(20);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...NAVY);
    doc.setFontSize(9);
    doc.text('Custom Prompt', margin, y);
    y += 5;

    doc.setFillColor(245, 245, 245);
    const promptLines = doc.splitTextToSize(month.customPrompt, contentWidth - 10);
    const promptHeight = promptLines.length * 3.8 + 6;
    checkPageBreak(promptHeight + 4);
    doc.roundedRect(margin, y - 3, contentWidth, promptHeight, 2, 2, 'F');
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...GRAY);
    doc.setFontSize(7.5);
    doc.text(promptLines, margin + 4, y + 1);
    y += promptHeight + 6;

    y += 4;
  });

  // ── Coaching CTA ──
  checkPageBreak(35);
  y += 4;
  doc.setFillColor(250, 248, 245);
  doc.roundedRect(margin, y - 5, contentWidth, 30, 3, 3, 'F');

  doc.setFillColor(...accentRgb);
  doc.roundedRect(margin, y - 5, 3, 30, 1, 1, 'F');

  doc.setTextColor(...NAVY);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Want help implementing this plan?', margin + 8, y + 3);

  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...GRAY);
  doc.text(
    'Book a free 30-minute AI strategy call with Joel Salinas.',
    margin + 8,
    y + 10
  );

  doc.setTextColor(...accentRgb);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text(
    'jsalinas.org/services/executive-coaching',
    margin + 8,
    y + 18
  );
  doc.link(margin + 8, y + 14, 80, 6, {
    url: 'https://jsalinas.org/services/executive-coaching.html?utm_source=compass&utm_medium=pdf&utm_campaign=coaching',
  });

  y += 35;

  // ── Footer ──
  checkPageBreak(15);
  doc.setTextColor(...LIGHT_GRAY);
  doc.setFontSize(7);
  doc.setFont('helvetica', 'normal');
  doc.text(
    'AI Leadership Compass by Joel Salinas  |  jsalinas.org  |  leadershipinchange.com',
    pageWidth / 2,
    y,
    { align: 'center' }
  );

  doc.save(`AI-Leadership-Compass-${archetype.name.replace(/\s+/g, '-')}.pdf`);
  } catch (error) {
    console.error('PDF generation error:', error);
    alert('PDF generation failed. Please try the "Copy Entire Plan" option instead.');
  }
}
