# Fondations Théoriques

Pour appréhender pleinement les travaux présentés dans ce document, une bonne compréhension des concepts fondamentaux de la dynamique des fluides numérique et de l'adaptation de maillage est essentielle

## Une bref rappel du WorkFlow CFD : 

Comme indiqué lors de l'introduction la Computational Fluid Dynamics (CFD) est une discipline clé pour la simulation de phénomènes aéronautiques complexes.

Son workflow typique comprend plusieurs étapes :
1. la formulation du problème physique en équations mathématiques ( Equations de Naviers-Stokes )

1. la discrétisation du domaine physique en un maillage "initial" pour transformer les équations continues en un système discret

1. la résolution numérique de ce système

1. L'analyse d'erreur de la solution

1. l'adaptation de ce maillage en conséquence dans le but de converger vers un maillage et une solution optimale pour le problème donné.



<center>
<img src="../images/Schema_Remesh_bg.png" alt="Logo Tucanos" width="100%">
</center>

L'analyse d'erreur, qui succède à la résolution CFD, est le moteur de l'adaptation de maillage. <br> De cette analyse découle un champ de métrique, une entité qui précise comment le maillage doit être modifié pour minimiser les erreurs sur le maillage intial. Pour bien saisir ce mécanisme, il est fondamental de comprendre ce qu'est une métrique et comment elle définit un granularité spatiale. (Voir section sur les métriques : [Metrics](./Metrics.md)) <br>


Une fois cette métrique cible établie, il devient nécessaire de savoir comment la traduire en actions concrètes sur le maillage. La section sur __l'Adaptation de Maillage__ explicitera les opérations géométriques et topologiques qui transforment le maillage pour qu'il réponde aux spécifications de la métrique (voir section [Mesh Adaptation](./Mesh_Adaptation.md))

Finalement, pour que l'ensemble de ce processus d'adaptation soit viable et performant pour les applications industrielles à grande échelle, une maîtrise du Calcul Parallèle est indispensable. On expliquera certains aspects de la discipline et on montrera de quelle manière on souhaite l'utiliser dans le cadre de la thèse. (voir section [Parallel_Computing](./Parallel_Computing.md))

 

