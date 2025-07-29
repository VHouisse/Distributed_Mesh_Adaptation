# General Context and Motivations
## 1.1 The Challenge of Numerical Simulation and the Essence of Mesh Adaptation
In the fields of engineering and science, numerical modeling and simulation play a predominant role in understanding and predicting the behavior of complex physical phenomena. Whether simulating airflow around an aircraft wing, heat propagation in a reactor, or the deformation of structures under stress, achieving high-fidelity in these simulations presents a fundamental challenge.

Numerically solving the equations governing these complex phenomena requires prior discretization of space and time. For this, meshes are fundamental, as they allow us to decompose the complex geometry induced by the problem into a finite set of elements. This necessary discretization enables the approximation of physical quantities, thereby allowing the underlying problem equations to be solved computationally.

While meshes are essential, their static design reveals certain limitations when facing the complexity of physical phenomena, particularly in fluid dynamics. For instance, capturing the full range of information from turbulent flows with a static mesh is almost impossible. Indeed, these phenomena are characterized by very intense physical gradients and highly complex motion structures in very specific areas of the domain (boundary layers, wakes, etc.).

Therefore, a static and isotropic meshing approach is not optimal: it risks being insufficiently refined where very precise resolution is crucial, and overly dense in less critical areas of the flow. In addition to information loss, this imbalance leads to an unjustified computational overhead in regions where lower precision would suffice.

To overcome these challenges and optimize the efficiency of high-fidelity numerical simulations, anisotropic mesh adaptation is paramount. This dynamic approach allows for an intelligent adjustment of mesh element density and orientation based on the solution's characteristics and the approximation errors incurred. Anisotropy enables refinement by aligning the shape of mesh elements with the directions of predominant physical phenomena. By precisely concentrating computational resources where they are needed and stretching elements elsewhere, it maximizes accuracy while minimizing costs.

Achieving this high fidelity at the scale of modern industrial applications, such as those in the aerospace industry, necessitates resorting to massively parallel computing. Indeed, the data volume and computational complexity become colossal; a typical mesh for this type of simulation can involve tens, or even hundreds of millions of elements.

Ensuring computational efficiency with such a volume of data can only be achieved through parallel computing. This involves distributing the mesh and intrinsic computational operations, such as adaptation operations, across thousands of different computing cores. This parallel dimension introduces an additional layer of complexity: it's crucial to ensure an equitable distribution of computation time among processors, efficient and minimal communication between each processor, and the consistency of calculations. It is within this high-performance context that mesh adaptation solutions must operate to be truly useful for industrial applications.

## 1.2 Industrial Context and Objectives
This thesis work is part of a collaboration between Airbus and Cerfacs, aiming to address concrete industrial needs in computational fluid dynamics through applied research. At the heart of this initiative is CODA (Code ONERA DLR AIRBUS), a massively parallel numerical simulation tool for fluid dynamics, managing very large-scale computations.

The primary objective of this thesis is to develop a parallel anisotropic mesh adaptation framework for the CODA CFD solver. The ultimate goal is to reduce lead times in aircraft design and widen the scope of design exploration within Airbus's engineering offices.

To achieve this, a key part of the thesis will involve identifying and implementing anisotropic metrics suitable for capturing critical phenomena like boundary layers and transonic shocks, as well as "goal-based" metrics leveraging adjoint-sensitivity. The implementation of this distributed mesh adaptation workflow will begin with a command-line interface version, then evolve into a direct coupling with CODA's FSDM module via the kalpaTARU C-API. The workflow's effectiveness will be validated through practical applications on representative aircraft configurations (LAGOON, DPW).

## 1.3 Document Roadmap
This MdBook aims to present the entirety of the advancements and results obtained throughout my doctoral thesis. Across its chapters, it will trace the continuous evolution of my thesis, from initial explorations to the most recent findings. Each section will address a fundamental aspect of my research: the acquisition of theoretical knowledge related to anisotropic mesh adaptation, the development environment and tools used, as well as the full scope of my scientific contributions. The objective is to provide a clear and structured overview of my research's progress, the challenges encountered, and the solutions developed over these three years, offering a comprehensive insight into my doctoral journey.

<br><br><br>
<div style="display: flex; justify-content: space-between; align-items: flex-start;">
    <img src="../images/Airbus.png" alt="Image à gauche" style="width: 30%;">
    <img src="../images//CERFACS.png" alt="Image à droite" style="width: 30%;">
</div>
