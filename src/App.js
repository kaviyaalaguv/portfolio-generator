import { useState } from 'react';

function App() {
  const [form, setForm] = useState({
    name: '',
    bio: '',
    skills: '',
    project1: '',
    project1Link: '',
    project2: '',
    project2Link: '',
  });
  const [template, setTemplate] = useState('A');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const skillList = form.skills.split(',').map(s => s.trim()).filter(s => s);

  const themeStyles = {
    A: {
      background: '#ffffff',
      color: '#000000',
      borderColor: '#ccc',
      link: '#007bff',
    },
    B: {
      background: '#f7f9fc',
      color: '#1a1a1a',
      borderColor: '#ddd',
      link: '#1a73e8',
    },
    C: {
      background: '#1e1e1e',
      color: '#e0e0e0',
      borderColor: '#333',
      link: '#58a6ff',
    },
    D: {
      background: '#fdf6e3',
      color: '#333',
      borderColor: '#e6e1d5',
      link: '#c94f4f',
    },
  };

  const currentTheme = themeStyles[template];

  return (
    <>
      <style>{`
        /* Responsive styles */
        * {
          box-sizing: border-box;
        }
        body, html, #root {
          margin: 0; padding: 0; height: 100%;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f0f2f5;
        }
        .outer-wrapper {
          padding: 20px;
          max-width: 900px;
          margin: auto;
          min-height: 100vh;
          background-color: #f0f2f5;
        }
        h2 {
          text-align: center;
          margin-bottom: 30px;
        }
        .template-picker {
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        select {
          margin-top: 8px;
          padding: 6px;
          border-radius: 4px;
          border: 1px solid #ccc;
          font-size: 16px;
          width: 200px;
        }
        form {
          display: grid;
          gap: 12px;
          margin-bottom: 40px;
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        input, textarea {
          padding: 10px;
          border-radius: 5px;
          border: 1px solid #ccc;
          font-size: 16px;
          width: 100%;
        }
        textarea {
          resize: none;
        }
        button {
          padding: 10px 15px;
          border-radius: 6px;
          background-color: #007bff;
          color: #fff;
          border: none;
          font-weight: bold;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.3s ease;
        }
        button:hover {
          background-color: #0056b3;
        }
        .portfolio {
          border-radius: 10px;
          box-shadow: 0 0 15px rgba(0,0,0,0.15);
          line-height: 1.7;
          padding: 25px;
          border: 1px solid;
        }
        .portfolio h1 {
          border-bottom: 1px solid;
          padding-bottom: 10px;
          margin-bottom: 20px;
          word-break: break-word;
        }
        .portfolio p {
          font-style: italic;
          margin-bottom: 20px;
        }
        .skills-list {
          padding-left: 20px;
          margin-bottom: 20px;
        }
        .projects {
          display: grid;
          gap: 10px;
        }
        .project-link {
          text-decoration: none;
          font-weight: bold;
          word-wrap: break-word;
        }

        /* Responsive adjustments */
        @media (max-width: 600px) {
          .template-picker select {
            width: 100%;
          }
          form {
            padding: 15px;
          }
          button {
            font-size: 14px;
            padding: 10px;
          }
          .portfolio {
            padding: 15px;
          }
        }
      `}</style>

      <div className="outer-wrapper">
        <h2>🌟 Portfolio Generator</h2>

        <div className="template-picker">
          <label>
            <strong>Template Style:</strong>
            <select
              value={template}
              onChange={e => setTemplate(e.target.value)}
            >
              <option value="A">Classic</option>
              <option value="B">Modern</option>
              <option value="C">Dark Developer</option>
              <option value="D">Elegant</option>
            </select>
          </label>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Full Name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            required
          />
          <textarea
            placeholder="Short Bio"
            value={form.bio}
            onChange={e => setForm({ ...form, bio: e.target.value })}
            required
            rows={3}
          />
          <input
            placeholder="Skills (comma separated)"
            value={form.skills}
            onChange={e => setForm({ ...form, skills: e.target.value })}
          />
          <input
            placeholder="Project 1 Title"
            value={form.project1}
            onChange={e => setForm({ ...form, project1: e.target.value })}
          />
          <input
            placeholder="Project 1 Link"
            value={form.project1Link}
            onChange={e => setForm({ ...form, project1Link: e.target.value })}
          />
          <input
            placeholder="Project 2 Title"
            value={form.project2}
            onChange={e => setForm({ ...form, project2: e.target.value })}
          />
          <input
            placeholder="Project 2 Link"
            value={form.project2Link}
            onChange={e => setForm({ ...form, project2Link: e.target.value })}
          />
          <button type="submit">🚀 Generate Portfolio</button>
        </form>

        {submitted && (
          <div
            className="portfolio"
            style={{
              borderColor: currentTheme.borderColor,
              background: currentTheme.background,
              color: currentTheme.color,
            }}
          >
            <h1 style={{ borderColor: currentTheme.borderColor }}>{form.name}</h1>
            <p>{form.bio}</p>

            {skillList.length > 0 && (
              <>
                <h3>🛠 Skills</h3>
                <ul className="skills-list">
                  {skillList.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </>
            )}

            {(form.project1 || form.project2) && <h3>📁 Projects</h3>}
            <div className="projects">
              {form.project1 && (
                <div>
                  <strong>{form.project1}</strong> —{' '}
                  <a
                    href={form.project1Link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                    style={{ color: currentTheme.link }}
                  >
                    {form.project1Link}
                  </a>
                </div>
              )}
              {form.project2 && (
                <div>
                  <strong>{form.project2}</strong> —{' '}
                  <a
                    href={form.project2Link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                    style={{ color: currentTheme.link }}
                  >
                    {form.project2Link}
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
