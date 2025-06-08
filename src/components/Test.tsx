
const Test = () => {
    return (
        <>
            <section className="bg-purple-700 text-white py-20 text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Ads Business Comes Alive</h1>
                <p className="text-lg md:text-xl mb-6">SDK 및 API 기반 광고 서버 및 운영 플랫폼</p>
                <a href="#contact"
                   className="bg-white text-purple-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200">도입
                    문의하기</a>
            </section>

            <section className="py-16 px-6 max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold mb-10 text-center">통합 SDK로 광고 사업을 빠르고 간편하게!</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-100 p-6 rounded-xl shadow">
                        <h3 className="font-semibold text-xl mb-2">빠른 구축</h3>
                        <p>4주 내 연동 및 광고 송출 가능</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-xl shadow">
                        <h3 className="font-semibold text-xl mb-2">맞춤형 커스터마이징</h3>
                        <p>UI 및 광고 상품 형태를 자유롭게 설정</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-xl shadow">
                        <h3 className="font-semibold text-xl mb-2">다양한 과금 방식</h3>
                        <p>구좌형, CPM, 입찰형 등 지원</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-xl shadow">
                        <h3 className="font-semibold text-xl mb-2">Native UI 지원</h3>
                        <p>서비스에 적합한 광고 UI 제공</p>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 py-16 px-6">
                <h2 className="text-3xl font-bold mb-10 text-center">신뢰받는 고객사</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    <div className="text-center">블라인드</div>
                    <div className="text-center">사람인</div>
                    <div className="text-center">SOOP TV</div>
                    <div className="text-center">LG U+</div>
                    <div className="text-center">BAND</div>
                    <div className="text-center">원스토어</div>
                    <div className="text-center">데일리샷</div>
                </div>
            </section>

            <section className="py-16 px-6 max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold mb-10 text-center">모든 기능을 하나의 SDK로</h2>
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold">광고 연동 통합</h3>
                        <p>판매 광고, DSP, 네트워크 광고를 한 번에 지원</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">과금 방식 유연성</h3>
                        <p>모든 광고 상품 유형 지원</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">맞춤 UI 및 타겟팅</h3>
                        <p>서비스 기반 Native UI 및 고도화된 로직 제공</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">광고 사업 전담 지원</h3>
                        <p>세일즈부터 운영까지 전방위 지원</p>
                    </div>
                </div>
            </section>

            <section id="contact" className="bg-purple-700 text-white py-20 px-6">
                <div className="max-w-xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">도입 상담을 원하시나요?</h2>
                    <p className="mb-8">정보를 남겨주시면 담당자가 연락드립니다.</p>
                    <form className="space-y-4">
                        <input type="text" placeholder="담당자명" className="w-full p-3 rounded text-black"/>
                        <input type="text" placeholder="회사명" className="w-full p-3 rounded text-black"/>
                        <input type="text" placeholder="서비스명" className="w-full p-3 rounded text-black"/>
                        <input type="email" placeholder="Email" className="w-full p-3 rounded text-black"/>
                        <label className="block text-sm mt-2">
                            <input type="checkbox" className="mr-2"/> 개인정보 수집 및 이용 동의
                        </label>
                        <button type="submit"
                                className="bg-white text-purple-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200">문의
                            신청
                        </button>
                    </form>
                </div>
            </section>


            <footer className="bg-gray-800 text-gray-300 text-sm py-6 text-center">
                <p>주식회사 와이즈버즈 | 경기도 성남시 수정구 금토로 69 다우디지털스퀘어 5층</p>
                <p>Tel. 02-538-8897 | Email. sales@nestads.com</p>
                <p>사업자등록번호: 703-86-00909</p>
            </footer>

        </>
    )

}

export default Test;