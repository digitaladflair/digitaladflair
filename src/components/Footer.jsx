
export function Footer() {
  return (
    <footer className="bg-white text-gray-800 pt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
        <div className="bg-indigo-50 rounded-xl shadow p-6 text-center">
          <h4 className="text-xl font-semibold mb-2">Bangalore</h4>
          <p className="mb-2">VGCP+MH6 Saaya Village Apartments,<br/> Talaghattapura, Vajarahalli,<br/> Bengaluru, Karnataka 560109</p>
          <p>📞 <a className="text-purple-600" href="tel:+918525018187">+91 85250 18187</a></p>
          <p>✉️ <a className="text-purple-600" href="mailto:digitaladflair@gmail.com">digitaladflair@gmail.com</a></p>
        </div>
        <div className="bg-indigo-50 rounded-xl shadow p-6 text-center">
          <h4 className="text-xl font-semibold mb-2">Coimbatore</h4>
          <p className="mb-2">XW35+53, #69, Arumuga Goundanur,<br/> Coimbatore, Tamil Nadu 641010</p>
          <p>📞 <a className="text-purple-600" href="tel:+918525018187">+91 85250 18187</a></p>
          <p>✉️ <a className="text-purple-600" href="mailto:digitaladflair@gmail.com">digitaladflair@gmail.com</a></p>
        </div>
        <div className="bg-indigo-50 rounded-xl shadow p-6 text-center">
          <h4 className="text-xl font-semibold mb-2">Salem</h4>
          <p className="mb-2">V3FV+25C, Kadayampatti,<br/> Salem, Tamil Nadu 636351</p>
          <p>📞 <a className="text-purple-600" href="tel:+918525018187">+91 85250 18187</a></p>
          <p>✉️ <a className="text-purple-600" href="mailto:digitaladflair@gmail.com">digitaladflair@gmail.com</a></p>
        </div>
      </div>
      <div className="text-center py-6" style={{ backgroundColor: 'antiquewhite' }}>
        <div className="flex justify-center gap-6 text-2xl mb-4">
          <a href="#" className="text-blue-600 hover:text-blue-800"><i className="fab fa-facebook"></i></a>
          <a href="#" className="text-blue-400 hover:text-blue-600"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-pink-600 hover:text-pink-800"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-blue-700 hover:text-blue-900"><i className="fab fa-linkedin"></i></a>
        </div>
        <p className="text-sm text-gray-600">Copyright © 2025 | Powered by Digital Adflair</p>
      </div>
    </footer>
  );
}
