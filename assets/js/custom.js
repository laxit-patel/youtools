class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="container position-sticky z-index-sticky top-0">
            <div class="row">
                <div class="col-12">
                    <nav class="navbar navbar-expand-lg gradient-animation  blur border-radius-xl top-0 z-index-fixed shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
                        <div class="container-fluid px-0">
                            <a class="navbar-brand font-weight-bolder ms-sm-3 fs-5  d-none d-md-block text-white" href="../index.html" rel="tooltip" title="Designed and Coded by Creative Tim" data-placement="bottom" >
                                Toolsvala
                            </a>
                            <a class="navbar-brand font-weight-bolder ms-sm-3  d-block d-md-none text-white" href="../index.html" rel="tooltip" title="Designed and Coded by Creative Tim" data-placement="bottom" >
                                Toolsvala
                            </a>

                            <button class="navbar-toggler shadow-none ms-md-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon mt-2">
                                    <span class="navbar-toggler-bar bar1"></span>
                                    <span class="navbar-toggler-bar bar2"></span>
                                    <span class="navbar-toggler-bar bar3"></span>
                                </span>
                            </button>
                            <div class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0" id="navigation">
                                <ul class="navbar-nav navbar-nav-hover ms-auto">
                                    <li class="nav-item dropdown dropdown-hover mx-2">
                                        <a role="button" class="nav-link ps-2 d-flex cursor-pointer align-items-center text-white" id="dropdownMenuPages" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="ni ni-settings opacity-6 me-2 text-md text-white"></i> Tools
                                            <img src="../assets/img/down-arrow.svg" alt="down-arrow" class="arrow ms-2 d-lg-block d-none">
                                            <img src="../assets/img/down-arrow.svg" alt="down-arrow" class="arrow ms-1 d-lg-none d-block ms-auto">
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-end dropdown-menu-animation ms-n3 dropdown-xl p-3 border-radius-xl mt-0 mt-lg-3" aria-labelledby="dropdownMenuPages">
                                            <div class="row d-none d-lg-block">
                                                <div class="col-12 px-4 py-2">
                                                    <div class="row">
                                                        <div class="col-4 position-relative">

                                                            <a href="../tools/age-calculator.html" class="dropdown-item text-wrap border-radius-md">
                                                                <span>Age Calculator</span>
                                                            </a>
                                                            <a href="../tools/qr-code-generator.html" class="dropdown-item text-wrap border-radius-md">
                                                                <span>QR Code</span>
                                                            </a>


                                                            <hr class="vertical dark">

                                                        </div>
                                                        <div class="col-4 position-relative">


                                                            <a href="../tools/decimal-to-binary.html" class="dropdown-item text-wrap border-radius-md">
                                                                <span>Decimal To Binary Converter</span>
                                                            </a>
                                                            <a href="../tools/md5-hash-generator.html" class="dropdown-item text-wrap border-radius-md">
                                                                <span>MD5 Generator</span>
                                                            </a>

                                                            <hr class="vertical dark">

                                                        </div>
                                                        <div class="col-4">

                                                            <a href="../tools/password-generator.html" class="dropdown-item text-wrap border-radius-md">
                                                                <span>Password Generator</span>
                                                            </a>
                                                            <a href="https://play.google.com/store/apps/details?id=com.bizzpost.in" class="dropdown-item text-wrap border-radius-md">
                                                                <span>Festival Image & Video Creator</span>
                                                            </a>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="d-lg-none">

                                                <a href="../tools/age-calculator.html" class="dropdown-item border-radius-md">
                                                    Calculator
                                                </a>
                                                <a href="../tools/qr-code-generator.html" class="dropdown-item border-radius-md">
                                                    QR Code
                                                </a>
                                                <a href="../tools/decimal-to-binary.html" class="dropdown-item border-radius-md">
                                                    Decimal To Binary Converter
                                                </a>
                                                <a href="../tools/md5-hash-generator.html" class="dropdown-item border-radius-md">
                                                    MD5 Hash Generator
                                                </a>
                                                <a href="../tools/password-generator.html" class="dropdown-item border-radius-md">
                                                    Password Generator
                                                </a>
                                                <a href="https://play.google.com/store/apps/details?id=com.bizzpost.in" class="dropdown-item border-radius-md">
                                                Festival Image & Video Creator
                                                </a>
                                            </div>
                                        </div>
                                    </li>

                                </ul>

                            </div>
                        </div>
                    </nav>
                    <!-- End Navbar -->
                </div>
            </div>
        </div>
        `
    }

}

class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                <!-- -------- START FOOTER 5 w/ DARK BACKGROUND ------- -->
        <footer class="footer py-5 bg-gradient-dark position-relative overflow-hidden">
        <img src="../assets/img/shapes/pattern-lines.svg" alt="pattern-lines" class="position-absolute start-0 top-0 w-100 opacity-6">
        <div class="container position-relative z-index-1">
            <div class="row">
            <div class="col-lg-4 me-auto mb-lg-0 mb-4 text-lg-start text-center">
                <p class="text-sm text-white opacity-8 mb-0">
                Copyright © <script>document.write(new Date().getFullYear())</script> Toolsvala.com
                </p>
            </div>
            <div class="col-lg-6 ms-auto text-lg-end text-center">
            <p class="text-sm text-white opacity-8 mb-0">
            Made with 💗 by Laxit Patel
            </p>
            
            </div>
            </div>
        </div>
        </footer>
        <!-- -------- END FOOTER 5 w/ DARK BACKGROUND ------- -->
        `
    }
}

customElements.define('custom-navbar', CustomHeader)
customElements.define('custom-footer', CustomFooter)