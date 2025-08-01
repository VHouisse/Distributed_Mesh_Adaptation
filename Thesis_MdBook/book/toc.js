// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="Intro/Introduction.html"><strong aria-hidden="true">1.</strong> General Context and Motivations</a></li><li class="chapter-item expanded "><a href="Theoritical_Foundations/Theoritical_Foundations.html"><strong aria-hidden="true">2.</strong> Theoritical Foundations</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Theoritical_Foundations/Metrics.html"><strong aria-hidden="true">2.1.</strong> Metrics</a></li><li class="chapter-item expanded "><a href="Theoritical_Foundations/Mesh_Adaptation.html"><strong aria-hidden="true">2.2.</strong> Mesh Adaptation</a></li><li class="chapter-item expanded "><a href="Theoritical_Foundations/Parallel_Computing.html"><strong aria-hidden="true">2.3.</strong> Parallel Computing</a></li></ol></li><li class="chapter-item expanded "><a href="Work_Environnement/Work_Enviornnement.html"><strong aria-hidden="true">3.</strong> Work Environnement</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Work_Environnement/Tucanos.html"><strong aria-hidden="true">3.1.</strong> Tucanos</a></li><li class="chapter-item expanded "><a href="Work_Environnement/Tools.html"><strong aria-hidden="true">3.2.</strong> Tools</a></li><li class="chapter-item expanded "><a href="Work_Environnement/Planning_previsionnel.html"><strong aria-hidden="true">3.3.</strong> Planning</a></li><li class="chapter-item expanded "><a href="Work_Environnement/Encadrement.html"><strong aria-hidden="true">3.4.</strong> Encadrement</a></li></ol></li><li class="chapter-item expanded "><a href="Contributions/First_Explorations_and_Contributions.html"><strong aria-hidden="true">4.</strong> First Explorations &amp; Contribution</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Contributions/Partitionners.html"><strong aria-hidden="true">4.1.</strong> Partitionners</a></li><li class="chapter-item expanded "><a href="Contributions/Load_Balancing.html"><strong aria-hidden="true">4.2.</strong> Load Balancing</a></li></ol></li><li class="chapter-item expanded "><a href="References_Appendix/Appendix_and_References.html"><strong aria-hidden="true">5.</strong> Appendix and References</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="References_Appendix/References.html"><strong aria-hidden="true">5.1.</strong> References</a></li><li class="chapter-item expanded "><a href="References_Appendix/Appendix.html"><strong aria-hidden="true">5.2.</strong> Appendix</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
