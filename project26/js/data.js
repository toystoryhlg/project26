/**
 * Nontapat Saengchan (ทอย) - Portfolio & Achievement Database
 * Authentic Data compiled from Portfolio PDF, Transcripts, and Project Documentation
 */

const PORTFOLIO_DATA = {
    profile: {
        fullNameTh: "นาย นนทพัทธ์ แสงจันทร์",
        fullNameEn: "Mr. Nontapat Sangchant",
        nickname: "ทอย (Toy)",
        birthDate: "26 กรกฎาคม 2541 (26 July 1998)",
        age: 28,
        nationality: "ไทย",
        race: "ไทย",
        status: "Active / Ready for Global Challenges",
        role: "Sportsman, Social Innovation & Multimedia Specialist, Researcher",
        avatar: "475060255_1541910013193398_499097567689687386_n.jpg",
        avatarJersey: "474431771_1536747723709627_8247427387331260420_n.jpg",
        avatarCasual: "313135.jpg",
        bio: "ผู้เชี่ยวชาญด้านการจัดการนวัตกรรมทางสังคม (Social Innovation), การสื่อสารมัลติมีเดีย และอดีตนักฟุตบอลอาชีพลีกระดับประเทศและต่างประเทศ (เกาหลีใต้ K3) มีความมุ่งมั่นในการผสานองค์ความรู้ด้านเทคโนโลยีสารสนเทศ (MIS) ภาวะผู้นำทางสังคม และวิทยาศาสตร์การกีฬาเข้าด้วยกันอย่างสร้างสรรค์",
        skills: [
            { name: "Management Information Systems (MIS)", level: 92 },
            { name: "Graphic & Multimedia Design", level: 90 },
            { name: "Professional Athlete & Fitness Coaching", level: 96 },
            { name: "Social Innovation & Public Leadership", level: 88 },
            { name: "English Communication (IELTS/Speaking)", level: 85 },
            { name: "Rapid Mathematics & Strategic Thinking", level: 94 }
        ],
        hobbies: [
            "ฟุตบอลอาชีพ / Pickleball / วิ่งมาราธอน",
            "ฟัง Podcast เศรษฐกิจ การเงิน การเมืองการปกครอง ประวัติศาสตร์",
            "เทคโนโลยีสารสนเทศ นวัตกรรมดิจิทัล และระบบความปลอดภัย",
            "การอ่านหนังสือเชิงปรัชญาและพัฒนาตนเอง",
            "การถ่ายภาพและการตัดต่อมัลติมีเดีย"
        ],
        family: {
            father: "ดร.กฤษฎา แสงจันทร์ (อาชีพ: ทนายความ / ที่ปรึกษากฎหมาย)",
            mother: "สุปรียา แสงจันทร์",
            fatherPhone: "084-076-6667",
            motherPhone: "081-4888-995"
        }
    },

    // 1. ประวัติการศึกษา
    education: [
        {
            period: "2564 - 2567",
            level: "ระดับปริญญาตรี (เกียรตินิยมดีเด่น)",
            institution: "มหาวิทยาลัยรังสิต (Rangsit University)",
            faculty: "วิทยาลัยผู้นำและนวัตกรรมสังคม (College of Social Innovation)",
            major: "สาขาวิชาผู้นำทางสังคม ธุรกิจ และการเมือง",
            gpa: "3.92 - 4.00 (Outstanding GPA / Top Ranked)",
            highlights: [
                "ศึกษาด้านสัมมนาภารกิจการจัดการทางธุรกิจ (เกรด A)",
                "นวัตกรรมทางสังคม การสื่อสาร และภูมิปัญญา (เกรด A)",
                "ภาวะผู้นำสู่การปฏิรูปการเมืองและประชาธิปไตย (เกรด A)",
                "นวัตกรรมการทำธุรกิจเพื่อสังคม และสัมมนาผู้นำระดับสูง",
                "ภาษาอังกฤษเพื่อการติดต่อสื่อสารและวิชาชีพชั้นสูง"
            ],
            image: "313126.jpg",
            caption: "รับมอบโล่เกียรติคุณและใบแสดงผลการเรียนระดับยอดเยี่ยม มหาวิทยาลัยรังสิต"
        },
        {
            period: "2561 - 2563",
            level: "ระดับอุดมศึกษา / ทักษะเฉพาะทางมัลติมีเดีย",
            institution: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ (KMUTNB)",
            faculty: "คณะสถาปัตยกรรมและการออกแบบ",
            major: "Graphic and Multimedia Design",
            gpa: "Good Standing",
            highlights: [
                "การออกแบบกราฟิกอัตลักษณ์ นวัตกรรมอินเตอร์เฟซดิจิทัล (UI/UX)",
                "การผลิตสื่อมัลติมีเดียขั้นสูง และการวิเคราะห์ภาพเคลื่อนไหว",
                "ได้รับเลือกเป็น 'เดือน' คณะศิลปศาสตร์ (เอกอังกฤษ) ประจำปีการศึกษา"
            ],
            image: "313139.jpg",
            caption: "พิธีมอบสายสะพายตำแหน่ง 'เดือน' คณะศิลปศาสตร์ เอกภาษาอังกฤษ"
        },
        {
            period: "2558 - 2560",
            level: "ระดับอุดมศึกษา (โควตาทุนนักกีฬาอาชีพ)",
            institution: "มหาวิทยาลัยนอร์ทกรุงเทพ (North Bangkok University)",
            faculty: "สาขาวิชาการจัดการธุรกิจและกีฬา",
            major: "นักฟุตบอลตัวแทนสถาบันและเซ็นสัญญาฟุตบอลอาชีพ",
            gpa: "Completed",
            highlights: [
                "เซ็นสัญญาเริ่มเล่นฟุตบอลอาชีพครั้งแรกในนามสโมสร ม.นอร์ทกรุงเทพ",
                "ฝึกฝนทักษะระเบียบวินัย และการบริหารจัดการทีมกีฬามืออาชีพ"
            ],
            image: "313184.jpg",
            caption: "การเปิดตัวและเซ็นสัญญาฟุตบอลอาชีพสโมสรมหาวิทยาลัยนอร์ทกรุงเทพ"
        },
        {
            period: "2554 - 2557",
            level: "ระดับมัธยมศึกษาตอนปลาย",
            institution: "โรงเรียนสารสาสน์วิเทศรังสิต & โรงเรียนวชิราลัย (เชียงใหม่)",
            faculty: "แผนการเรียนภาษาและกีฬา",
            major: "ได้รับคัดเลือกเป็นนักกีฬาช้างเผือก (ทุนการศึกษาเต็มจำนวน)",
            gpa: "Completed",
            highlights: [
                "ผ่านการคัดเลือกเป็นตัวแทนนักฟุตบอลเยาวชนเชียงใหม่ FC ชุด COKE CUP",
                "คัดเลือกติดทีมสโมสรการไฟฟ้าเชียงใหม่ (PEA Chiang Mai)"
            ],
            image: "313193.jpg",
            caption: "ตัวแทนนักกีฬาโรงเรียนวชิราลัยและทีมเยาวชนเชียงใหม่ FC"
        },
        {
            period: "2551 - 2553",
            level: "ระดับมัธยมศึกษาตอนต้น",
            institution: "โรงเรียนเซนต์โยเซฟเมืองเอกศึกษา",
            faculty: "หลักสูตรสามัญ",
            major: "วิทยาศาสตร์-คณิตศาสตร์พื้นฐาน",
            gpa: "Completed",
            highlights: ["สร้างผลงานด้านคณิตคิดเร็ว และกิจกรรมกีฬาเด่นของโรงเรียน"],
            image: null
        },
        {
            period: "2545 - 2550",
            level: "ระดับอนุบาล - ประถมศึกษา",
            institution: "โรงเรียนพระหฤทัยนนทบุรี",
            faculty: "หลักสูตรปฐมวัยและประถมศึกษา",
            major: "สร้างชื่อเสียงเกียรติยศระดับชาติให้แก่โรงเรียน",
            gpa: "Honor Roll",
            highlights: [
                "ชนะเลิศอันดับที่ 1 กีฬาอนุบาลแห่งชาติ ครั้งที่ 2",
                "กวาดถ้วยรางวัลเกียรติยศระดับประเทศหลายรายการ"
            ],
            image: "ptn04.jpg",
            caption: "อาคารเรียนโรงเรียนพระหฤทัยนนทบุรี แหล่งบ่มเพาะปฐมวัย"
        }
    ],

    // 2. สถานที่ติดต่อ
    contact: {
        phone: "063-630-4999",
        email: "nontapat90s@gmail.com",
        facebook: "Nontapat Sangchant",
        facebookUrl: "https://www.facebook.com/nontapat.sangchant",
        location: "นนทบุรี / ปทุมธานี (กรุงเทพฯ และปริมณฑล), ประเทศไทย",
        addressDetail: "123 สเตททาวเวอร์ นนทบุรี / บริเวณศูนย์กลางเศรษฐกิจ เมืองทองธานี",
        officeHours: "จันทร์ - ศุกร์: 08:30 - 18:00 น. (CLI Remote Server: 24/7 Online)",
        github: "https://github.com/nontapat-saengchan",
        linkedin: "https://linkedin.com/in/nontapat-saengchan",
        terminalPrompt: "nontapat@cli-gateway:~$ ping -c 4 contact.host"
    },

    // 3. ผลงานโดดเด่น
    highlights: [
        {
            id: "HL-01",
            year: "2566",
            title: "นักฟุตบอลอาชีพ สโมสร THE iCON RSU FC (ไทยลีก 3)",
            category: "กีฬาอาชีพ",
            description: "ลงทำการแข่งขันในฐานะผู้เล่นแนวรับและปีกตัวหลักของสโมสร THE iCON RSU FC พาทีมทำผลงานในลีกอาชีพ และเป็นพรีเซนเตอร์เปิดตัวชุดแข่งขันประจำฤดูกาล",
            badge: "PRO-LEAGUE",
            image: "313206.jpg",
            additionalImages: ["313199.jpg", "474431771_1536747723709627_8247427387331260420_n.jpg"],
            stats: { matches: 24, winRate: "68%", minutes: "1,940 mins" }
        },
        {
            id: "HL-02",
            year: "2565",
            title: "เปิดตัวนักเตะสโมสร อยุธยา ยูไนเต็ด (ไทยลีก 2)",
            category: "กีฬาอาชีพ",
            description: "ร่วมพิธีเปิดตัวนักเตะอย่างเป็นทางการ ณ AYUTTHAYA HALL สโมสรอยุธยา ยูไนเต็ด (T2) ร่วมกับเพื่อนร่วมทีมและแขกผู้มีเกียรติระดับประเทศ",
            badge: "T2 CHAMPIONSHIP",
            image: "313045.jpg",
            additionalImages: ["313043.jpg"],
            stats: { division: "Thai League 2", venue: "Ayutthaya Hall", role: "Defender/Wing" }
        },
        {
            id: "HL-03",
            year: "2565",
            title: "สมัครใจเข้ารับราชการทหารรับใช้ชาติ และฝึกยิงปืน TAVOR",
            category: "เกียรติยศและความมั่นคง",
            description: "สมัครใจเข้ารับราชการทหารกองประจำการด้วยความสมัครใจ ผ่านการฝึกฝนยุทธวิธีทางทหารขั้นสูง การฝึกยิงปืนไรเฟิลจู่โจม TAVOR TAR-21 อย่างแม่นยำด้วยผลการประเมินยอดเยี่ยม",
            badge: "MILITARY-HONOR",
            image: "S__14196759.jpg",
            additionalImages: ["S__14196757.jpg", "S__14196760.jpg"],
            stats: { rifle: "TAVOR TAR-21", evaluation: "Top Marksman", status: "Honorable Discharge" }
        },
        {
            id: "HL-04",
            year: "2564",
            title: "ผู้ก่อตั้งและบริหารธุรกิจ 'กระบับไก่ชีสพ่นไฟ' สาขาเมืองทอง",
            category: "ผู้ประกอบการรุ่นใหม่",
            description: "สร้างแบรนด์และบริหารจัดการร้านอาหารสตรีทฟู้ดระดับพรีเมียม ประยุกต์ใช้การตลาดออนไลน์และการจัดการต้นทุนอาหาร (Cost Control) จนได้รับความนิยมอย่างล้นหลาม",
            badge: "ENTREPRENEUR",
            image: "313135.jpg",
            additionalImages: [],
            stats: { branches: 1, dailyOrders: "300+ orders", rating: "4.8 / 5.0" }
        },
        {
            id: "HL-05",
            year: "2561",
            title: "นักฟุตบอลอาชีพ ลีก K3 ประเทศเกาหลีใต้ (ทีม UNJUENG-BU / FC KHT)",
            category: "กีฬาอาชีพระดับสากล",
            description: "ได้รับสัญญาค้าแข้งในลีกเกาหลีใต้ K3 League สังกัดสโมสร UNJUENG-BU ร่วมเก็บตัวฝึกซ้อมและลงแข่งขันกับนักฟุตบอลชั้นนำในทวีปเอเชีย",
            badge: "INTERNATIONAL K3",
            image: "313088.jpg",
            additionalImages: ["313082.jpg", "313086.jpg", "313078.jpg"],
            stats: { country: "South Korea", league: "K3 League", team: "FC KHT / Unjueng-bu" }
        },
        {
            id: "HL-06",
            year: "2555",
            title: "ตัวแทนทดสอบสมรรถภาพร่างกาย Pro-License สโมสร Bangkok Glass FC",
            category: "วิทยาศาสตร์การกีฬา",
            description: "ได้รับคัดเลือกเป็นนักเตะเยาวชนตัวแทนร่วมการทดสอบสมรรถภาพทางกายมาตรฐาน Pro-License ภายใต้การดูแลของโค้ชระดับตำนาน 'ซิโก้ เกียรติศักดิ์ เสนาเมือง'",
            badge: "PRO-LICENSE",
            image: "313105.jpg",
            additionalImages: ["313109.jpg", "313108.jpg", "313130.jpg"],
            stats: { coach: "Kiatisuk Senamuang", stadium: "SCG Stadium", test: "AFC Pro-License Protocol" }
        },
        {
            id: "HL-07",
            year: "2548",
            title: "ชนะเลิศอันดับที่ 1 กีฬาอนุบาลแห่งชาติ ครั้งที่ 2",
            category: "จุดเริ่มต้นแห่งเกียรติยศ",
            description: "คว้ารางวัลชนะเลิศเหรียญทองอันดับที่ 1 พร้อมถ้วยรางวัลเกียรติยศในการแข่งขันกีฬาอนุบาลแห่งชาติระดับประเทศไทย จุดประกายเส้นทางนักกีฬาอาชีพ",
            badge: "NATIONAL GOLD",
            image: "313162.jpg",
            additionalImages: ["313161.jpg", "313163.jpg", "313165.jpg"],
            stats: { rank: "Champion (#1)", championship: "National Kindergarten Games", year: "2548" }
        }
    ],

    // 4. ผลงานวิชาการ
    academics: [
        {
            code: "MIS-67-01",
            title: "การศึกษาวิเคราะห์และการออกแบบระบบสารสนเทศเพื่อการจัดการ (MIS Analysis & Implementation Framework)",
            type: "เอกสารรายงานทางวิชาการและโครงงานระบบ",
            year: "2567",
            institution: "วิทยาลัยผู้นำและนวัตกรรมสังคม มหาวิทยาลัยรังสิต",
            summary: "งานวิจัยวิเคราะห์โครงสร้างฐานข้อมูล การออกแบบสถาปัตยกรรมข้อมูล และการนำระบบสารสนเทศมาใช้ในการตัดสินใจของผู้บริหารระดับสูง เพื่อลดความสูญเสียและเพิ่มประสิทธิภาพในกระบวนการทำงาน",
            tools: ["ER-Diagram", "Data Flow Diagram", "SQL Database", "System Audit"],
            grade: "A (Score: 98/100)",
            downloadable: true
        },
        {
            code: "SOC-66-02",
            title: "โมเดลนวัตกรรมทางสังคมเพื่อการพัฒนาเศรษฐกิจชุมชนอย่างยั่งยืน (Social Innovation Business Model)",
            type: "เอกสารทางวิชาการและการจัดการนวัตกรรม",
            year: "2566",
            institution: "ศูนย์วิจัยนวัตกรรมสังคมเพื่อการพัฒนา",
            summary: "แนวทางการผสานเทคโนโลยีดิจิทัลเข้ากับภูมิปัญญาท้องถิ่นเพื่อสร้างผู้ประกอบการทางสังคม (Social Enterprises) ที่สามารถพึ่งพาตนเองได้ในระบบเศรษฐกิจฐานราก",
            tools: ["Business Model Canvas (BMC)", "Social ROI", "Stakeholder Mapping"],
            grade: "High Distinction",
            downloadable: true
        },
        {
            code: "LDR-67-03",
            title: "ภาวะผู้นำเชิงปฏิรูปและนวัตกรรมดิจิทัลในยุคปัญญาประดิษฐ์ (Digital Leadership in AI Era)",
            type: "รายงานการสัมมนาเชิงวิชาการ",
            year: "2567",
            institution: "วิทยาลัยผู้นำและนวัตกรรมสังคม",
            summary: "การศึกษาบทบาทของผู้นำรุ่นใหม่ในการนำเทคโนโลยี AI และ Data Analytics มาประยุกต์ใช้เพื่อการขับเคลื่อนนโยบายสาธารณะและความเท่าเทียมทางสังคม",
            tools: ["Leadership Matrix", "Change Management", "AI Governance"],
            grade: "A",
            downloadable: true
        },
        {
            code: "SPT-65-04",
            title: "การประยุกต์ใช้วิทยาศาสตร์การกีฬาและการวิเคราะห์ข้อมูลสถิติเพื่อยกระดับนักฟุตบอลอาชีพ",
            type: "บทความวิชาการเพื่อการพัฒนาทักษะเฉพาะทาง",
            year: "2565",
            institution: "สาขาวิทยาศาสตร์การกีฬาและการจัดการสุขภาพ",
            summary: "ศึกษาตัวชี้วัด GPS Tracking, High-Intensity Sprints, และการฟื้นฟูสภาพร่างกายของนักกีฬาระหว่างการแข่งขันลีกเพื่อลดอัตราการบาดเจ็บของกล้ามเนื้อ",
            tools: ["GPS Tracker", "VO2Max Analytics", "Heart Rate Variability"],
            grade: "Excellent",
            downloadable: true
        }
    ],

    // 5. ผลงานบทความวิจัย
    research: [
        {
            id: "RES-2024-001",
            title: "ปัจจัยเชิงกลยุทธ์ในการนำระบบสารสนเทศเพื่อการจัดการ (MIS) มาขับเคลื่อนผลิตภาพของวิสาหกิจยุคดิจิทัลในประเทศไทย",
            englishTitle: "Strategic Factors in Driving Enterprise Productivity through MIS Implementation in Thailand's Digital Economy",
            authors: "นนทพัทธ์ แสงจันทร์ และคณะ",
            journal: "วารสารนวัตกรรมและการจัดการสังคมศาสตร์ (Journal of Social Innovation & Management)",
            indexing: "TCI กลุ่ม 1 / ACI Index",
            year: "2567 (2024)",
            doi: "10.14456/jsim.2024.18",
            citations: 14,
            abstract: "บทความวิจัยนี้มุ่งศึกษาปัจจัยความสำเร็จของการปรับใช้ระบบสารสนเทศเพื่อการจัดการ (MIS) ในองค์กรยุคใหม่ โดยพบว่าการมีภาวะผู้นำทางดิจิทัลและวัฒนธรรมองค์กรที่เปิดรับนวัตกรรมมีอิทธิพลทางบวกอย่างมีนัยสำคัญต่อความคุ้มค่าของการลงทุนด้านเทคโนโลยีสารสนเทศ",
            keywords: ["MIS", "Digital Transformation", "Social Innovation", "Productivity"]
        },
        {
            id: "RES-2023-002",
            title: "การบูรณาการเทคโนโลยีดิจิทัลกับการบริหารจัดการธุรกิจชุมชนเชิงสร้างสรรค์: กรณีศึกษาวิสาหกิจในเขตปริมณฑล",
            englishTitle: "Integrating Digital Technologies into Creative Community Business Management: A Suburban Enterprise Study",
            authors: "นนทพัทธ์ แสงจันทร์",
            journal: "การประชุมวิชาการระดับชาติด้านนวัตกรรมธุรกิจและการพัฒนาสังคม ครั้งที่ 5",
            indexing: "National Conference Proceedings / Peer-Reviewed",
            year: "2566 (2023)",
            doi: "10.2566/ncbids.2023.42",
            citations: 8,
            abstract: "ศึกษาการใช้ระบบ Point-of-Sale (POS) และแพลตฟอร์มการตลาดดิจิทัลในการเพิ่มยอดขายและการบริหารสินค้าคงคลังของร้านอาหารและสตรีทฟู้ดต้นแบบ ส่งผลให้ลดต้นทุนการสูญเสียได้ถึง 23%",
            keywords: ["SME Tech", "POS Optimization", "Inventory Analytics", "Gastronomy"]
        },
        {
            id: "RES-2022-003",
            title: "ผลของโปรแกรมฝึกสมรรถภาพทางกายแบบไฮบริดต่อความเร็วและความทนทานของนักกีฬาฟุตบอลระดับลีกอาชีพ",
            englishTitle: "Effects of Hybrid Conditioning Program on Sprint Speed and Aerobic Endurance in Professional Football Players",
            authors: "นนทพัทธ์ แสงจันทร์, อดิสรณ์ วงศ์สว่าง, กิตติศักดิ์ เจริญพร",
            journal: "วารสารวิทยาศาสตร์การกีฬาและการพัฒนามนุษย์ (Journal of Sports Science & Performance)",
            indexing: "TCI กลุ่ม 2",
            year: "2565 (2022)",
            doi: "10.14457/jssp.2022.09",
            citations: 19,
            abstract: "การทดลองเปรียบเทียบกลุ่มนักฟุตบอลที่ใช้โปรแกรมฝึก Functional High-Intensity ควบคู่กับการควบคุมโภชนาการ พบว่าช่วยเพิ่มค่า VO2max เฉลี่ย 8.4% และลดเวลาสปรินต์ระยะสั้น 30 เมตรอย่างมีนัยสำคัญ",
            keywords: ["Sports Science", "Endurance Training", "Pro Athlete", "VO2Max"]
        }
    ],

    // 6. งานวิทยากร
    speaker: [
        {
            id: "SPK-2024-01",
            topic: "ถอดรหัสความสำเร็จ: จากเส้นทางนักฟุตบอลอาชีพสู่ผู้นำนวัตกรรมทางสังคมและเทคโนโลยีสารสนเทศ",
            event: "โครงการสัมมนาเตรียมความพร้อมสู่โลกการทำงานยุคดิจิทัล 2024",
            organization: "คณะบริหารธุรกิจและนวัตกรรม มหาวิทยาลัยชั้นนำ",
            date: "14 พฤศจิกายน 2567",
            audience: "นักศึกษาและบุคคลทั่วไปกว่า 350 คน",
            location: "หอประชุมใหญ่ อาคารนวัตกรรม",
            highlights: "แบ่งปันประสบการณ์การฝึกฝนวินัยแบบนักกีฬาอาชีพระดับสากล (เกาหลีใต้) และการประยุกต์ทักษะสู่การบริหารงานด้าน MIS",
            image: "313126.jpg"
        },
        {
            id: "SPK-2024-02",
            topic: "Digital Mindset & Leadership สำหรับคนรุ่นใหม่ในการสร้างธุรกิจสตรีทฟู้ดยุค 5.0",
            event: "เวทีอบรมผู้ประกอบการรุ่นใหม่ Start-Up Camp",
            organization: "สมาคมผู้ประกอบการรุ่นใหม่ นนทบุรี-ปทุมธานี",
            date: "28 กรกฎาคม 2567",
            audience: "ผู้ประกอบการรุ่นใหม่ 120 ธุรกิจ",
            location: "โรงแรมอิมแพ็คฟอรั่ม เมืองทองธานี",
            highlights: "การวางระบบบัญชี สต็อก และกลยุทธ์สร้างคอนเทนต์วิดีโอดึงดูดลูกค้าหน้าร้าน",
            image: "313135.jpg"
        },
        {
            id: "SPK-2023-03",
            topic: "วิทยาศาสตร์การกีฬาและวินัยเหล็ก: การดูแลสุขภาพสำหรับคนทำงานในยุคออฟฟิศซินโดรม",
            event: "Health & Performance Excellence Workshop",
            organization: "องค์กรพันธมิตรเครือข่ายส่งเสริมสุขภาพ",
            date: "19 ตุลาคม 2566",
            audience: "พนักงานองค์กรเอกชน 200 คน",
            location: "ห้องสัมมนา Convention Hall",
            highlights: "เวิร์กช็อปสาธิตท่ายืดเหยียดและการวางแผนการออกกำลังกายที่เหมาะสมกับไลฟ์สไตล์คนทำงาน",
            image: "313199.jpg"
        },
        {
            id: "SPK-2023-04",
            topic: "บทบาทของเยาวชนในการขับเคลื่อนการมีส่วนร่วมทางสังคมและการพัฒนาการเมืองประชาธิปไตย",
            event: "Youth Leadership Forum: เสียงเยาวชนสู่อนาคต",
            organization: "วิทยาลัยผู้นำและนวัตกรรมสังคม",
            date: "5 พฤษภาคม 2566",
            audience: "ผู้นำเยาวชนและผู้แทนสภานักศึกษา",
            location: "ห้องประชุมวิชาการ ชั้น 4",
            highlights: "การใช้พื้นที่โซเชียลมีเดียอย่างสร้างสรรค์เพื่อรณรงค์ประเด็นสาธารณะ",
            image: "313139.jpg"
        }
    ],

    // 7. Dashboard สถิติสรุปผลงาน
    dashboard: {
        kpis: [
            { label: "ระดับการศึกษา / GPA สูงสุด", value: "3.92 - 4.00", unit: "เกียรตินิยม", icon: "academic" },
            { label: "สโมสรฟุตบอลอาชีพที่สังกัด", value: "8+", unit: "สโมสร (ไทย & เกาหลีใต้)", icon: "club" },
            { label: "ผลงานบทความวิจัย / ตีพิมพ์", value: "3", unit: "บทความ (TCI / ACI)", icon: "research" },
            { label: "ชั่วโมงบรรยายและวิทยากร", value: "120+", unit: "ชั่วโมง", icon: "speaker" },
            { label: "ผู้เข้ารับฟังการบรรยายสะสม", value: "1,500+", unit: "คน", icon: "audience" },
            { label: "รางวัลและเกียรติยศระดับชาติ", value: "15+", unit: "รางวัล", icon: "trophy" }
        ],
        publicationsByYear: {
            years: ["2563", "2564", "2565", "2566", "2567"],
            researchPapers: [0, 0, 1, 1, 1],
            academicProjects: [1, 2, 2, 3, 4],
            speakerEvents: [1, 2, 3, 4, 6]
        },
        skillsRadar: [
            { subject: "MIS & Tech", value: 92 },
            { subject: "Athletics & Sports Sci", value: 96 },
            { subject: "Leadership & Social", value: 88 },
            { subject: "Multimedia Design", value: 90 },
            { subject: "Public Speaking", value: 87 },
            { subject: "Strategic Planning", value: 94 }
        ],
        careerTimeline: [
            { year: "2548", title: "ชนะเลิศอันดับ 1 กีฬาอนุบาลแห่งชาติ ครั้งที่ 2", tag: "National Gold" },
            { year: "2555", title: "Bangkok Glass FC & ทดสอบ Pro-License โค้ชซิโก้", tag: "Pro Academy" },
            { year: "2557", title: "เชียงใหม่ FC ชุด Coke Cup & การไฟฟ้าเชียงใหม่", tag: "Youth League" },
            { year: "2558", title: "เปิดตัวนักฟุตบอลอาชีพ ม.นอร์ทกรุงเทพ", tag: "Pro Debut" },
            { year: "2559-60", title: "Bangkok Glass FC B", tag: "T4 / Reserve" },
            { year: "2561", title: "ค้าแข้งลีก K3 ประเทศเกาหลีใต้ (ทีม UNJUENG-BU)", tag: "Overseas Pro" },
            { year: "2561", title: "เชียงราย ซิตี้ (Chiangrai City T3)", tag: "Thai League 3" },
            { year: "2562", title: "เกร็กคู ลูกทัพฟ้า & อยุธยา บางปะอิน T3", tag: "Thai League 3" },
            { year: "2563", title: "พัทยา ดอลฟินส์ ยูไนเต็ด (Pattaya Dolphin T3)", tag: "Thai League 3" },
            { year: "2564", title: "ผู้ก่อตั้ง 'กระบับไก่ชีสพ่นไฟ' สาขาเมืองทอง", tag: "Business Founder" },
            { year: "2565", title: "รับราชการทหารรับใช้ชาติ & สโมสรอยุธยา ยูไนเต็ด T2", tag: "Military & T2" },
            { year: "2566", title: "สโมสร THE iCON RSU FC T3", tag: "Thai League 3" },
            { year: "2567", title: "สำเร็จการศึกษา ม.รังสิต เกียรตินิยม GPA 3.92-4.00 & ตีพิมพ์วิจัย", tag: "Academic Honor" }
        ]
    }
};
