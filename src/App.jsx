
import { useEffect, useState } from "react";
import {
  LayoutDashboard,
  Sprout,
  Map,
  Droplets,
  FlaskConical,
  CalendarDays,
  Bell,
  Settings,
  Search,
  Menu,
  CloudSun,
  TrendingUp,
  ArrowUpRight,
  Leaf,
  ChevronDown,
  Plus,
  CircleCheck,
  Clock3,
  AlertTriangle,
} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import "./App.css";
const initialFields = [
  {
    id: 1,
    name: "1-maydon",
    area: 25,
    soil: "Qora tuproq",
  },
  {
    id: 2,
    name: "2-maydon",
    area: 12,
    soil: "Bo‘z tuproq",
  },
];

const navigation = [
  { label: "Boshqaruv paneli", icon: LayoutDashboard },
  { label: "Ekinlar", icon: Sprout },
  { label: "Maydonlar", icon: Map },
  { label: "Sug‘orish", icon: Droplets },
  { label: "O‘g‘itlash", icon: FlaskConical },
  { label: "Kalendar", icon: CalendarDays },
  { label: "Bildirishnomalar", icon: Bell },
];

const chartData = [
  { day: "Du", water: 42, growth: 30 },
  { day: "Se", water: 55, growth: 38 },
  { day: "Ch", water: 48, growth: 35 },
  { day: "Pa", water: 70, growth: 48 },
  { day: "Ju", water: 62, growth: 55 },
  { day: "Sh", water: 82, growth: 63 },
  { day: "Ya", water: 76, growth: 70 },
];
const initialCrops = [
  {
    id: 1,
    name: "Kuzgi bug‘doy",
    field: "1-maydon",
    area: 25,
    progress: 65,
    status: "O‘smoqda",
    type: "wheat",
  },
  {
    id: 2,
    name: "Makkajo‘xori",
    field: "2-maydon",
    area: 12,
    progress: 85,
    status: "Pishish bosqichi",
    type: "corn",
  },
];

const initialTasks = [
  { title: "1-maydonni sug‘orish", detail: "Sholi maydoni · 07:00", type: "water", done: false },
  { title: "Azotli o‘g‘it berish", detail: "2-maydon · 10:00", type: "fertilizer", done: false },
  { title: "Ekin holatini tekshirish", detail: "Bug‘doy maydoni · 16:00", type: "check", done: true },
];

function App() {
  const [active, setActive] = useState("Boshqaruv paneli");
  
const [fields, setFields] = useState(() => {
  try {
    const savedFields = localStorage.getItem("smartfarm_fields");
    return savedFields ? JSON.parse(savedFields) : initialFields;
  } catch {
    return initialFields;
  }
});

useEffect(() => {
  localStorage.setItem("smartfarm_fields", JSON.stringify(fields));
}, [fields]);

  const [showCropForm, setShowCropForm] = useState(false);
const [cropName, setCropName] = useState("");
const [cropField, setCropField] = useState("");
const [cropArea, setCropArea] = useState("");
  const [crops, setCrops] = useState(() => {
  try {
    const savedCrops = localStorage.getItem("smartfarm_crops");
    return savedCrops ? JSON.parse(savedCrops) : initialCrops;
  } catch {
    return initialCrops;
  }
});
const [showFieldForm, setShowFieldForm] = useState(false);
const [fieldName, setFieldName] = useState("");
const [fieldArea, setFieldArea] = useState("");
const [fieldSoil, setFieldSoil] = useState("Qora tuproq");

useEffect(() => {
  localStorage.setItem("smartfarm_crops", JSON.stringify(crops));
}, [crops]);
 const [tasks, setTasks] = useState(() => {
  try {
    const savedTasks = localStorage.getItem("smartfarm_tasks");
    return savedTasks ? JSON.parse(savedTasks) : initialTasks;
  } catch {
    return initialTasks;
  }
});

useEffect(() => {
  localStorage.setItem("smartfarm_tasks", JSON.stringify(tasks));
}, [tasks]);
  const [showForm, setShowForm] = useState(false);
  const [taskName, setTaskName] = useState("");

  const completed = tasks.filter((task) => task.done).length;

  function addTask(event) {
    event.preventDefault();
    if (!taskName.trim()) return;
    setTasks([
      ...tasks,
      {
        title: taskName.trim(),
        detail: "Bugun · Vaqt belgilanmagan",
        type: "check",
        done: false,
      },
    ]);
    setTaskName("");
    setShowForm(false);
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon"><Sprout size={25} /></div>
          <div>
            <div className="brand-name">SmartFarm<span>.</span></div>
            <div className="brand-caption">FERMER XO‘JALIGI</div>
          </div>
        </div>

        <div className="nav-caption">ASOSIY MENYU</div>
        <nav className="nav-list">
          {navigation.map(({ label, icon: Icon }) => (
            <button
              key={label}
              className={`nav-item ${active === label ? "active" : ""}`}
              onClick={() => setActive(label)}
            >
              <Icon size={19} strokeWidth={1.8} />
              <span>{label}</span>
              {label === "Bildirishnomalar" && <span className="nav-dot" />}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="weather-mini">
            <div className="weather-top">
              <CloudSun size={23} />
              <span>Bugungi ob-havo</span>
            </div>
            <div className="weather-temp">24° <span>Quyoshli</span></div>
            <div className="weather-place">Sirdaryo, O‘zbekiston</div>
          </div>
          <button className="nav-item settings-item" onClick={() => setActive("Sozlamalar")}>
            <Settings size={19} /><span>Sozlamalar</span>
          </button>
          <div className="profile">
            <div className="avatar">F</div>
            <div className="profile-text">
              <strong>Fermer</strong>
              <span>Fermer xo‘jaligi</span>
            </div>
            <ChevronDown size={17} className="profile-chevron" />
          </div>
        </div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <div className="mobile-brand"><Sprout size={22} /> SmartFarm</div>
          <div className="breadcrumb">Asosiy <span>/</span> <strong>{active}</strong></div>
          <div className="topbar-actions">
            <label className="search-box">
              <Search size={17} />
              <input placeholder="Qidirish..." aria-label="Qidirish" />
              <kbd>⌘ K</kbd>
            </label>
            <button className="icon-button notification-button" aria-label="Bildirishnomalar" onClick={() => setActive("Bildirishnomalar")}>
              <Bell size={19} /><i />
            </button>
            <div className="top-avatar">F</div>
          </div>
        </header>

        <div className="page-content">
          

{active === "Sug‘orish" && (
  <section className="panel irrigation-panel">
    <div className="panel-heading">
      <div>
        <h3>Sug‘orish rejasi</h3>
        <p>Maydonlaringiz uchun sug‘orish vazifalarini rejalashtiring</p>
      </div>
      <Droplets size={24} />
    </div>

    <form
      className="crop-form"
      onSubmit={(event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const data = new FormData(form);

        const newTask = {
          title: `${data.get("field")}ni sug‘orish`,
          detail: `${data.get("date")} · ${data.get("time")}`,
          type: "water",
          done: false,
        };

        setTasks((previous) => [...previous, newTask]);
        alert("Sug‘orish vazifasi qo‘shildi!");
        form.reset();
      }}
    >
      <label>Maydonni tanlang</label>
      <select name="field" required defaultValue="">
        <option value="" disabled>Maydonni tanlang</option>
        {fields.map((field) => (
          <option key={field.id} value={field.name}>
            {field.name} — {field.area} ga
          </option>
        ))}
      </select>

      <label>Sug‘orish sanasi</label>
      <input type="date" name="date" required />

      <label>Sug‘orish vaqti</label>
      <input type="time" name="time" required />

      <div className="crop-form-actions">
        <button type="submit" className="text-action">
          <Plus size={15} /> Rejaga qo‘shish
        </button>
      </div>
    </form>

    <div className="panel-heading">
      <div>
        <h3>Sug‘orish vazifalari</h3>
        <p>Bugungi ishlar va rejalashtirilgan vazifalar</p>
      </div>
    </div>

    <div className="task-list">
      {tasks.filter((task) => task.type === "water").length === 0 ? (
        <p>Hozircha sug‘orish vazifalari yo‘q.</p>
      ) : (
        tasks.filter((task) => task.type === "water").map((task, index) => (
          <div className="task-row" key={`${task.title}-${index}`}>
            <Droplets size={20} />
            <div className="task-copy">
              <strong>{task.title}</strong>
              <span>{task.detail}</span>
            </div>
            <span>{task.done ? "Bajarildi" : "Rejalashtirilgan"}</span>
          </div>
        ))
      )}
    </div>
  </section>
)}

          
{active === "Maydonlar" && (
  <section className="panel">
    <div className="panel-heading">
      <div>
        <h3>Maydonlarim</h3>
        <p>Fermer xo‘jaligingizdagi yerlar</p>
      </div>
      <button
        className="text-action"
       onClick={() => setShowFieldForm(true)}
      >
        <Plus size={15} /> Maydon qo‘shish
      </button>
    </div>

{showFieldForm && (
  <form
    className="crop-form"
    onSubmit={(event) => {
      event.preventDefault();

      if (!fieldName.trim() || Number(fieldArea) <= 0) return;

      const newField = {
        id: Date.now(),
        name: fieldName.trim(),
        area: Number(fieldArea),
        soil: fieldSoil,
      };

      setFields((previous) => [...previous, newField]);
      setFieldName("");
      setFieldArea("");
      setFieldSoil("Qora tuproq");
      setShowFieldForm(false);
    }}
  >
    <label>Maydon nomi</label>
    <input
      value={fieldName}
      onChange={(event) => setFieldName(event.target.value)}
      placeholder="Masalan: 3-maydon"
      required
    />

    <label>Yer hajmi (gektar)</label>
    <input
      type="number"
      min="0.1"
      step="0.1"
      value={fieldArea}
      onChange={(event) => setFieldArea(event.target.value)}
      placeholder="Masalan: 15"
      required
    />

    <label>Tuproq turi</label>
    <select
      value={fieldSoil}
      onChange={(event) => setFieldSoil(event.target.value)}
    >
      <option>Qora tuproq</option>
      <option>Bo‘z tuproq</option>
      <option>Qumloq tuproq</option>
      <option>Qumli tuproq</option>
      <option>O‘tloqi tuproq</option>
    </select>

    <div className="crop-form-actions">
      <button type="submit" className="text-action">Saqlash</button>
      <button
        type="button"
        className="text-action"
        onClick={() => setShowFieldForm(false)}
      >
        Bekor qilish
      </button>
    </div>
  </form>
)}

   
<div className="fields-list">
  {fields.map((field) => (
    <div className="crop-row" key={field.id}>
      <div className="crop-visual wheat">
        <Map size={25} />
      </div>

      <div className="crop-info">
        <strong>{field.name}</strong>
        <span>{field.soil}</span>
      </div>

      <div className="crop-status">
        <strong>{field.area} ga</strong>

        <div className="crop-actions">
          <button
            type="button"
            className="text-action"
            onClick={() => {
              const name = prompt("Maydon nomi:", field.name);
              if (name === null || !name.trim()) return;

              const area = prompt("Maydon hajmi (gektar):", String(field.area));
              if (
                area === null ||
                !Number.isFinite(Number(area)) ||
                Number(area) <= 0
              ) {
                alert("Maydon hajmini to‘g‘ri kiriting.");
                return;
              }

              const soil = prompt("Tuproq turi:", field.soil);
              if (soil === null || !soil.trim()) return;

              setFields((previous) =>
                previous.map((item) =>
                  item.id === field.id
                    ? {
                        ...item,
                        name: name.trim(),
                        area: Number(area),
                        soil: soil.trim(),
                      }
                    : item
                )
              );
            }}
          >
            Tahrirlash
          </button>

          <button
            type="button"
            className="text-action"
            onClick={() => {
              if (window.confirm(`“${field.name}” maydonini o‘chirmoqchimisiz?`)) {
                setFields((previous) =>
                  previous.filter((item) => item.id !== field.id)
                );
              }
            }}
          >
            O‘chirish
          </button>
        </div>
      </div>
    </div>
  ))}
</div>
  </section>
)}

          <section className="welcome-row">
            <div>
              <div className="eyebrow"><span className="live-dot" /> XO‘JALIK HOLATI</div>
              <h1>{active === "Boshqaruv paneli" ? "Xush kelibsiz, Fermer!" : active}</h1>
              <p className="welcome-subtitle">
                Xo‘jaligingiz holati bilan tanishing va bugungi ishlaringizni rejalashtiring.
              </p>
            </div>
            <button className="date-pill"><CalendarDays size={17} /> 22-oktabr, 2026</button>
          </section>

          <section className="hero-banner">
            <div className="hero-copy">
              <div className="hero-tag"><Leaf size={14} /> AQILLI DEHQONCHILIK</div>
              <h2>Hosilingizni aqlli<br />boshqaring.</h2>
              <p>Ma’lumotlarga asoslangan qarorlar bilan suvni tejang va hosildorlikni oshiring.</p>
              <button className="hero-button" onClick={() => setActive("Ekinlar")}>
                Ekinlarni ko‘rish <ArrowUpRight size={17} />
              </button>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="sun-orb" />
              <div className="field field-back" />
              <div className="field field-mid" />
              <div className="field field-front" />
              <div className="hero-plant plant-one"><Sprout size={68} /></div>
              <div className="hero-plant plant-two"><Sprout size={48} /></div>
            </div>
            <div className="hero-number"><TrendingUp size={16} /> Aqlli boshqaruv</div>
          </section>

          <section className="stats-grid">
            <article className="stat-card">
              <div className="stat-top"><span className="stat-icon green"><Sprout size={20} /></span><span className="stat-label">Jami ekinlar</span></div>
              <div className="stat-value">2 <span>tur</span></div>
              <div className="stat-foot"><span className="positive"><TrendingUp size={14} /> Faol</span><span> ekin turi</span></div>
            </article>
            <article className="stat-card">
              <div className="stat-top"><span className="stat-icon blue"><Map size={20} /></span><span className="stat-label">Maydonlar</span></div>
              <div className="stat-value">37 <span>ga</span></div>
              <div className="stat-foot">Umumiy yer maydoni</div>
            </article>
            <article className="stat-card">
              <div className="stat-top"><span className="stat-icon aqua"><Droplets size={20} /></span><span className="stat-label">Sug‘orish holati</span></div>
              <div className="stat-value">72<span>%</span></div>
              <div className="progress-track"><div className="progress-fill" style={{ width: "72%" }} /></div>
              <div className="stat-foot">Namlik ko‘rsatkichi · demo</div>
            </article>
            <article className="stat-card">
              <div className="stat-top"><span className="stat-icon amber"><Leaf size={20} /></span><span className="stat-label">Hosil prognozi</span></div>
              <div className="stat-value">+12<span>%</span></div>
              <div className="stat-foot"><span className="positive"><TrendingUp size={14} /> Kutilayotgan o‘sish</span></div>
            </article>
          </section>

          <section className="content-grid">
            <article className="panel chart-panel">
              <div className="panel-heading">
                <div><h3>Xo‘jalik ko‘rsatkichlari</h3><p>Haftalik faoliyat dinamikasi</p></div>
                <button className="select-pill">So‘nggi 7 kun <ChevronDown size={15} /></button>
              </div>
              <div className="chart-legend">
                <span><i className="legend-dot water-dot" /> Suv ko‘rsatkichi</span>
                <span><i className="legend-dot growth-dot" /> O‘sish indeksi</span>
              </div>
              <div className="chart-wrap">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 10, right: 8, left: -24, bottom: 0 }}>
                    <defs>
                      <linearGradient id="waterFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#269c70" stopOpacity={0.2} />
                        <stop offset="100%" stopColor="#269c70" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke="#edf1ed" strokeDasharray="4 5" vertical={false} />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "#87928a", fontSize: 12 }} dy={10} />
                    <Tooltip />
                    <Area type="monotone" dataKey="water" name="Suv" stroke="#269c70" strokeWidth={2.5} fill="url(#waterFill)" />
                    <Area type="monotone" dataKey="growth" name="O‘sish" stroke="#9bbf67" strokeWidth={2.5} fill="transparent" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="chart-note"><span className="chart-note-icon"><TrendingUp size={17} /></span><span>Grafikdagi qiymatlar hozircha <strong>namunaviy demo ma’lumotlar</strong> hisoblanadi.</span></div>
            </article>

            <article className="panel tasks-panel">
              <div className="panel-heading">
                <div><h3>Bugungi vazifalar</h3><p>Kunlik ishlar ro‘yxati</p></div>
                <button className="add-button" onClick={() => setShowForm(!showForm)} aria-label="Vazifa qo‘shish"><Plus size={19} /></button>
              </div>
              {showForm && (
                <form className="task-form" onSubmit={addTask}>
                  <input value={taskName} onChange={(event) => setTaskName(event.target.value)} placeholder="Yangi vazifa nomi..." autoFocus />
                  <button type="submit">Qo‘shish</button>
                </form>
              )}
              <div className="task-progress"><div><span>Bajarilgan vazifalar</span><strong>{completed}/{tasks.length}</strong></div><div className="task-progress-track"><div style={{ width: `${tasks.length ? completed / tasks.length * 100 : 0}%` }} /></div></div>
              <div className="task-list">
                {tasks.map((task, index) => (
                  <div className={`task-row ${task.done ? "task-done" : ""}`} key={`${task.title}-${index}`}>
                    <button className={`task-check ${task.done ? "checked" : ""}`} aria-label="Vazifani bajarilgan deb belgilash" onClick={() => setTasks(tasks.map((item, i) => i === index ? { ...item, done: !item.done } : item))}>
                      {task.done && <CircleCheck size={17} />}
                    </button>
                    <div className={`task-symbol ${task.type}`}>
                      {task.type === "water" ? <Droplets size={17} /> : task.type === "fertilizer" ? <FlaskConical size={17} /> : <Sprout size={17} />}
                    </div>
                    <div className="task-copy"><strong>{task.title}</strong><span>{task.detail}</span></div>
                    {task.done ? <CircleCheck className="task-status-done" size={18} /> : <Clock3 className="task-status-pending" size={18} />}
                  </div>
                ))}
              </div>
              <button className="all-tasks-button" onClick={() => setActive("Kalendar")}>Barcha vazifalarni ko‘rish <ArrowUpRight size={16} /></button>
            </article>
          </section>

          <section className="bottom-grid">
            <article className="panel crop-panel">
             
<div className="panel-heading">
  <div>
    <h3>Faol ekinlar</h3>
    <p>Maydonlaringizdagi ekinlar</p>
  </div>

  <div className="crop-actions">
    <button
      className="text-action"
      onClick={() => setActive("Ekinlar")}
    >
      Barchasi <ArrowUpRight size={15} />
    </button>

    <button
  className="text-action"
  onClick={() => setShowCropForm(true)}
>
  <Plus size={15} /> Ekin qo‘shish
</button>
  </div>
</div>


{crops.map((crop) => (
  <div className="crop-row" key={crop.id}>
    <div className={`crop-visual ${crop.type}`}>
      <Sprout size={29} />
    </div>

    <div className="crop-info">
      <strong>{crop.name}</strong>
      <span>{crop.field} · {crop.area} ga</span>

      <div className="crop-progress">
        <div style={{ width: `${crop.progress}%` }} />
      </div>
    </div>

    <div className="crop-status">
      <span className={`status-badge ${crop.type === "corn" ? "ready" : "growing"}`}>
        {crop.status}
      </span>
      <small>{crop.progress}%</small>

      <div className="crop-actions">
        <button
          type="button"
          className="text-action"
          onClick={() => {
            const name = prompt("Ekin nomi:", crop.name);
            if (name === null || !name.trim()) return;

            const field = prompt("Maydon nomi:", crop.field);
            if (field === null || !field.trim()) return;

            const area = prompt("Maydon hajmi (gektar):", String(crop.area));
            if (area === null || !Number.isFinite(Number(area)) || Number(area) <= 0) {
              alert("Maydon hajmini to‘g‘ri kiriting.");
              return;
            }

            setCrops((previous) =>
              previous.map((item) =>
                item.id === crop.id
                  ? { ...item, name: name.trim(), field: field.trim(), area: Number(area) }
                  : item
              )
            );
          }}
        >
          Tahrirlash
        </button>

        <button
          type="button"
          className="text-action"
          onClick={() => {
            if (window.confirm(`“${crop.name}” ekinini o‘chirmoqchimisiz?`)) {
              setCrops((previous) =>
                previous.filter((item) => item.id !== crop.id)
              );
            }
          }}
        >
          O‘chirish
        </button>
      </div>
    </div>
  </div>
))}

              <p className="demo-note"><AlertTriangle size={14} /> Ekinlar haqidagi ma’lumotlar hozircha namuna.</p>
            </article>

            <article className="panel quick-panel">
              <div className="panel-heading"><div>
{showCropForm && (
  <form
    className="crop-form"
    onSubmit={(event) => {
      event.preventDefault();

      if (!cropName.trim() || !cropField.trim() || Number(cropArea) <= 0) {
        return;
      }

      const newCrop = {
        id: Date.now(),
        name: cropName.trim(),
        field: cropField.trim(),
        area: Number(cropArea),
        progress: 0,
        status: "Yangi ekilgan",
        type: "wheat",
      };

      setCrops((previous) => [...previous, newCrop]);
      setCropName("");
      setCropField("");
      setCropArea("");
      setShowCropForm(false);
    }}
  >
    <label>Ekin nomi</label>
    <input
      value={cropName}
      onChange={(event) => setCropName(event.target.value)}
      placeholder="Masalan: Sholi"
      required
    />

    <label>Maydon nomi</label>
    <input
      value={cropField}
      onChange={(event) => setCropField(event.target.value)}
      placeholder="Masalan: 3-maydon"
      required
    />

    <label>Maydon hajmi (gektar)</label>
    <input
      type="number"
      min="0.1"
      step="0.1"
      value={cropArea}
      onChange={(event) => setCropArea(event.target.value)}
      placeholder="Masalan: 10"
      required
    />

    <div className="crop-form-actions">
      <button type="submit" className="text-action">
        Saqlash
      </button>
      <button
        type="button"
        className="text-action"
        onClick={() => setShowCropForm(false)}
      >
        Bekor qilish
      </button>
    </div>
  </form>
)}
<h3>Tezkor amallar</h3>
<p>Kerakli bo‘limga tez o‘ting</p>
</div>
</div>
              <div className="quick-grid">
                <button onClick={() => setActive("Maydonlar")}><span className="quick-icon q-green"><Map size={20} /></span><strong>Maydon qo‘shish</strong><span>Yerlarni boshqarish</span></button>
                <button onClick={() => setActive("Sug‘orish")}><span className="quick-icon q-blue"><Droplets size={20} /></span><strong>Sug‘orishni rejalash</strong><span>Suv jadvali</span></button>
                <button onClick={() => setActive("Ekinlar")}><span className="quick-icon q-yellow"><Sprout size={20} /></span><strong>Ekin qo‘shish</strong><span>Yangi ekin turi</span></button>
                <button onClick={() => setActive("O‘g‘itlash")}><span className="quick-icon q-purple"><FlaskConical size={20} /></span><strong>O‘g‘itlash rejasi</strong><span>Oziqlantirish</span></button>
              </div>
            </article>
          </section>

          <footer className="footer"><span>© 2026 SmartFarm Planner</span><span><span className="footer-dot" /> Aqlli dehqonchilik platformasi</span></footer>
        </div>
      </main>
    </div>
  );
}

export default App;
