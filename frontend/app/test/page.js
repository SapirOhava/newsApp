// app/test/page.js
export default function TestPage() {
  return (
    <div>
      <main>
        {/* Add your main content here */}
        <h1 className="text-center my-5">Test Page with Footer</h1>
      </main>

      <footer className="bg-light py-4">
        <div className="container">
          <div className="row text-center text-md-start">
            {/* First Column: Icons and Text */}
            <div className="col-md-4 mb-4 mb-md-0 d-flex flex-column align-items-center align-items-md-start">
              <div className="d-flex justify-content-center justify-content-md-start mb-3">
                <img
                  src="/icon1.png"
                  alt="Icon 1"
                  className="me-3"
                  style={{ width: "50px" }}
                />
                <img src="/icon2.png" alt="Icon 2" style={{ width: "50px" }} />
              </div>
              <p>אגף המודיעין</p>
              <p>חטיבת המחקר</p>
              <div className="d-flex justify-content-center justify-content-md-start">
                <small>
                  פיתוח <strong>Linnovate</strong>
                </small>
                <span className="mx-2">|</span>
                <small>
                  עיצוב <strong>Dvivo</strong>
                </small>
              </div>
            </div>

            {/* Second Column: iMonitor */}
            <div className="col-md-2 mb-4 mb-md-0">
              <h6 className="fw-bold">iMonitor</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-decoration-none text-dark">
                    מבזקים בטלגרם
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-dark">
                    מבזקים בוואטסאפ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-dark">
                    מבזקים במייל
                  </a>
                </li>
              </ul>
            </div>

            {/* Third Column: Text Section */}
            <div className="col-md-2 mb-4 mb-md-0">
              <h6 className="fw-bold">תחום כתיבה</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-decoration-none text-dark">
                    קבוצת וואטסאפ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-dark">
                    קבוצת וואטסאפ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-dark">
                    סדנאות כתיבה
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-dark">
                    הרצאות לקורסים
                  </a>
                </li>
              </ul>
            </div>

            {/* Fourth Column: Video */}
            <div className="col-md-2 mb-4 mb-md-0">
              <h6 className="fw-bold">וידאו</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-decoration-none text-dark">
                    כתבות וידאו
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-dark">
                    מודיעין מורחב
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-dark">
                    פרויקטים מיוחדים
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-dark">
                    VOD
                  </a>
                </li>
              </ul>
            </div>

            {/* Fifth Column: Additional Topics */}
            <div className="col-md-2">
              <h6 className="fw-bold">נושאים נוספים</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-decoration-none text-dark">
                    הראשות
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-dark">
                    תמיכה
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-dark">
                    צרו קשר
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
