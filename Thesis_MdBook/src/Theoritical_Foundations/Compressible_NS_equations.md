# Navier-Stokes Equations

## 2.1.1 The compressible Navier-Stokes equations 

The compressible Naviers-Stokes equations provides a mathematical description of flow motion in 3D space \\( \Omega \in \\mathrm{R}^3 \\)

\\[ \partial_{t} u + \nabla .(\mathbf{F}_c(\mathbf{u}) - \mathbf{F}_v(\mathbf{u}, \nabla\mathbf{u} ) ) = 0, \forall x \in \Omega, t > 0 \\]
\\[\mathbf{u}(x,0) = \mathbf{u}_0(x), \  \forall x \in \Omega \\]

With : 

\\[  \mathbf{u} = \begin{bmatrix} \rho \\\ \rho \mathbf{v}^\mathrm{T}  \\\ \rho \mathrm{E}  \end{bmatrix} , \ \mathbf{F}_c(\mathbf{u}) = \begin{bmatrix} \rho \mathbf{v}^\mathrm{T} \\\ \rho \mathbf{v} \mathbf{v}^\mathrm{T} + p I\\\ \rho \mathrm{E} \mathbf{v}^\mathrm{T} +  p \mathbf{v}^\mathrm{T} \end{bmatrix}  \ \text{and} \  \mathbf{F}_v(\mathbf{u}, \nabla\mathbf{u}) = \begin{bmatrix} 0 \\\ \mathcal{\tau} \\\  \mathbf{v}^\mathrm{T} \mathcal{\tau} - \mathbf{q}^\mathrm{T}  \end{bmatrix} \\]

The vector u represents the conservative variables, \\(\rho \\) being the density, \\(\mathbf{v} \\) being the velocity vector and \\(\mathbf{E}\\) the specific total energy. \\(\mathbf{F}_c(\mathbf{u})\\) and \\( \mathbf{F}_v(\mathbf{u}, \nabla\mathbf{u} ) \\) being respectively the convective and diffusive fluxes.

\\[\mathcal{\tau} = 2 \mu \mathbf{S}^D = \mu(\mathrm{T})(\nabla\mathbf{v} + \nabla\mathbf{v}^\mathrm{T}- \frac{2}{3}(\nabla . \mathbf{v} I))\\]
\\[ q = -\lambda \nabla T\\]
\\[ p = \rho \mathrm{RT} = (\gamma - 1)(\rho \mathrm{E} - \frac{1}{2} \rho \mathbf{v}^\mathrm{T}\mathbf{v}) \\]

where \\( p \\) is the static pressure, \\( \gamma = \frac{Cp}{Cv}\\)  is the ratio of specific heats, \\( \nu(T) \\) is the dynamic viscosity, \\( S^D\\) is the deviatoric component of the strain-rate tensor \\( S =  (\nabla \mathbf{v} + \nabla \mathbf{v}^\mathrm{T}) \\), \\( T \\) is the temperature, \\( R \\) is the specific gas constant, and \\(\lambda = \mu \frac{C_p}{P_r} \\) is the thermal conductivity, with \\( P_r \\) the Prandtl number. In this work, a value of Pr = 0.72 is used. The perfect gas law is used to close the system of equations, and the dependence of the viscosity on the temperature is expressed using Sutherland’s law.

The behavior of inviscid flows is governed by the Euler equations. They correspond to the Navier–Stokes
equations with zero viscosity \\( \mu = 0\\) and zero thermal conductivity \\(\lambda = 0\\). They then take the form of
equations (1) with \\(F_v = \begin{bmatrix} 0 \end{bmatrix} \\).


## 2.1.1 The Reynolds-Averaged Navier-Stokes equations

In cruise conditions the flow can be considered stationary as no complex physical phenomenons are
occurring. As such, the compressible Navier-Stokes equations can be simplified by taking the statistical
average.

\\[ \tilde u(t,x) = \frac{1}{t} \int_{-\frac{\nabla t}{2} }^{+\frac{\nabla t}{2}} \mathbf{u}(x,t + \tau) \ d\tau \\]

Each physical variable will be described as a small perturbation around mean values.

\\[\tilde u(t,x) = \bar{u}(t,x) + \acute{u}(t,x)\\]
Since the physical problem is stationary, the statistical mean is time independent. This is the classical
approach called RANS (Reynolds averaged Navier-Stokes).


With Boussinesq assumption, the expression of the averaged Reynolds stress tensor is : 

\\[ \bar{\tau}_t = 2 \mu_t \bar{S}^D - \frac{2}{3} \bar{\rho}\bar{k}I , \  \bar{q}_t = \frac{\mu_t}{Pr_t} \mathcal{C}_p \nabla \bar{T} \\]

Where : 
* \\(P r_t = 0.9 \\)  is the turbulent Prandtl number
* \\(\mu_t\\) is the turbulent dynamic viscosity 
* \\(k\\) is the turbulent kinetic energy.

In order to correctly capture velocity gradients near the wall, in RANS simulations the first element at the wall should be small enough to ensure \\( y^+ \simeq  1 \\) in the wall-normal direction. Usually RANS meshes are highly anisotropic in the boundary layers, since the main variation lies in the normal direction to the boundary.

The modeling of the turbulent viscosity and of the turbulent heat fluxes can be realised with different RANS models.In this work we will use the approach by Spalart and Allmaras, described more in detail in the next paragraph. 


## 2.3 Spalart-Allmaras turbulence model 

The mean flow equations are coupled with the one-equation turbulence model of Spalart-Allmaras (SA) [41] to solve a modeled transport equation for the kinematic eddy turbulent viscosity. 

In particular we describe the more recent formulation, known as the "negative" version of the SA model, which keeps into account the modification proposed by the original authors in [4], including the modifications for compressibility effects. 

The Reynolds-Averaged Navier-Stokes equations with the SA turbulence model can be written in conservative form by adding a source term to equation 1 as:


where we assume that u is the vector of time-averaged conservative variables over a given time interval
and t is a pseudo time. Here and in the remainder of this section we have dropped the symbol  ̄(.) for
clarity. The turbulent conservative variable ρv ̃ is added to the vector of conservative variables and the
convective and diffusive fluxes Fc(ρν ̃), Fv(ρν,  ̃ ∇(ρν ̃)) are defined as:



In the diffusive fluxes, the turbulent stress tensor τt and the turbulent heat fluxes qt in equation 7
are added respectively to τ and q defined in equation 3. In particular the term depending from k is
ignored for this type of one-equation model, because k is not readily available. The turbulent dynamic
viscosity μt is defined as:

The source terms act on the conservation equation only for the turbulent variable ρν ̃ and read:

where the production and destruction terms, P and D, are defined by: