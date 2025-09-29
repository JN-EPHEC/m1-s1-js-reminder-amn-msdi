// Exercise 2 : Asynchronité
// Simulation d'un appel réseau avec Promise + setTimeout

async function WorkspaceUserProfile(userId) {
  return new Promise((resolve, reject) => {
    // Simulate 2 seconds latency
    setTimeout(() => {
      if (userId === 123) {
        resolve({ name: 'John Doe', status: 'Active' });
      } else {
        reject(new Error('User not found'));
      }
    }, 2000);
  });
}

// Appels de test : un identifiant valide puis un identifiant invalide
(async () => {
  try {
    const user = await WorkspaceUserProfile(123);
    console.log('Success (123):', user);
  } catch (err) {
    console.error('Error (123):', err.message);
  }

  try {
    const user = await WorkspaceUserProfile(999);
    console.log('Success (999):', user);
  } catch (err) {
    console.error('Error (999):', err.message);
  }
})();
